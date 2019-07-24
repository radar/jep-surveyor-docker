import * as React from 'react';

interface RatingOptionProps {
  name: string,
  value: string,
  questionOption(value: string): void
}

class RatingOption extends React.Component<RatingOptionProps> {
  questionOption = (event: React.FormEvent) => {
    this.props.questionOption((event.target as HTMLInputElement).value)
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="radio" name={this.props.name} value={this.props.value} onChange={this.questionOption} /> {this.props.value}
      </div>
    )
  }
}

export default RatingOption;
