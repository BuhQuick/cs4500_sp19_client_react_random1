import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'

class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: []
        }
    }

    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers =>
                      this.setState({
                                        faqAnswers: faqAnswers
                                    })
            )
    }

    render() {
        return (
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    <tbody>
                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                     <tr key={faqAnswer.id}>
                                         <td>{faqAnswer.question}</td>
                                         <td>{faqAnswer.answer}</td>
                                     </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FAQAnswers