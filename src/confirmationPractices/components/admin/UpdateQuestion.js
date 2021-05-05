import React from 'react';
import Amplify, { API, Auth } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import gql from 'graphql-tag';
import * as mutations from '../../../graphql/mutations';

import awsconfig from '../../../aws-exports';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

class UpdateQuestion extends React.Component {
    state = {
        title: this.props.question.title,
        question: this.props.question.question,
        checks: this.props.question.checks,
        isSubmitted: false,
        submittedQuestion: null
    }

    addNewCheck = (e) => {
        e.preventDefault();
        let newCheck = 'New question';
        this.setState({checks: [...this.state.checks, newCheck]})
    }

    removeCheck = (e, i) => {
        e.preventDefault();
        let checks = [...this.state.checks];
        checks.splice(i, 1);
        this.setState({checks: checks});
    }

    updateValue(e, type, i) {
        let key = type;
        if (key === 'check') {
            let value = e.target.value;
            let checks = [...this.state.checks];
            checks[i] = value;
            this.setState({checks: checks})
        } else {
            this.setState({[key]: e.target.value});
        }
    }


    updateQuestion = (e, id) => {
        e.preventDefault();
        client.mutate({ 
            mutation: gql(mutations.updateQuestion), 
            variables: {input: {id: id, title: this.state.title, question: this.state.question, checks: this.state.checks, createdAt: new Date(), }
        }});
    }

    render() {
        return(
            <div>
                <div className="form">
                    <form>
                        <h3>{this.props.index +1}. {this.state.title} - Confirmation Practice</h3>
                        <label htmlFor="title">Title</label>
                        <p><em>The title of the question, representing the area of focus</em></p>
                        <input name="title" type="text" placeholder={this.props.question.title} onChange={ (e) => this.updateValue(e, 'title')}></input>

                        <label htmlFor="question">Confirmation Practice</label>
                        <p><em>The prompt for colleagues to reflect on their behaviours while working</em></p>
                        <textarea name="question" rows="4" cols="50" placeholder={this.props.question.question} onChange={ (e) => this.updateValue(e, 'question')}></textarea>
                        
                        <div className="checks">
                            <h3>Questions and checkpoints</h3>
                            <p><em>A list of questions to guide expected behaviours and remind colleagues of what's important for this particular practice. Add as many or as few questions as you feel are appropriate</em></p>
                            {this.state.checks.map((check, i) => {return(
                                <div key={i}>
                                    <label htmlFor={`check`}>Question {i + 1}</label>
                                    <input name={`check`} type="text" placeholder={check} onBlur={ (e) => this.updateValue(e, 'check', i)}></input>
                                    <button className="ghost" onClick={(e) => {this.removeCheck(e, i)}}>Remove question</button>
                                </div>
                            )})}
                            <button className="dark" onClick={(e) => {this.addNewCheck(e)}}>Add another question</button>
                        </div>

                        <button className="dark" onClick={(e) => {this.updateQuestion(e, this.props.question.id)}}>Update Confirmation Practice</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default UpdateQuestion