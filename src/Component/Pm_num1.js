import React, { Component } from 'react';
class Pm_num1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputWord: '',
            count: 0,
            List: [],
            occur: 0
        }
        this.inputTextHandler = this.inputTextHandler.bind(this);
    }

    inputTextHandler(event) {
        this.setState({ text: (event.target.value) });
    }
    inputWordHandler(e) {
        this.setState({ inputWord: (e.target.value) })
    }

    lengthListHandler(e) {
        e.preventDefault();
        this.setState({ List: (this.state.List.length) })
    }

    countAllWordInText(e) {
        e.preventDefault();
        const textInput = this.state.text.split(" ");
        this.setState({ count: textInput.length })
    }

    countWordHandler(e) {
        e.preventDefault();
        var word = this.state.text.split(" ");
        var wordGiven = this.state.inputWord;
        var counter = 0;
        word.forEach(i => {
            if (wordGiven === i) {
                counter += 1;
            }
        })
        this.setState({ occur: counter })
    }


    render() {
        return (
            <center>

                <div class="container">
                    <br></br>
                    <link
                        rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                    <div>
                        <h1> Text Input:</h1>
                        <div class="form-group">
                            <textarea id=" input-text" placeholder="Input text here...." onChange={(event) => this.inputTextHandler(event)}>{this.state.text}</textarea>
                            <div class="alert success"><b>Display Text</b>:  {this.state.text}</div>
                            <button class=" btn btn-primary" onClick={(e) => this.countAllWordInText(e)}>CountWordInText</button>
                            <br></br>
                            <div><b>  Count words in the text</b>: {this.state.count} </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h2>Word Input:</h2>
                        <div class="form-group">
                            <textarea id=" input-word" placeholder="Input word from text to be counted...." onChange={(e) => this.inputWordHandler(e)}>{this.state.inputWord}</textarea>
                        </div>
                        <button class=" btn btn-primary" onClick={(e) => this.countWordHandler(e)}>CountWord</button><br></br>
                        <div class="form-group"><b>Count</b>: {this.state.occur}</div>
                    </div>
                </div>
            </center>

        );
    }
}

export default Pm_num1;