import * as React from 'react';

interface RatingOptionProps {
  name: string,
  value: string,
  label: string,
  questionOptionSelected(value: string): void
}

class RatingOption extends React.Component<RatingOptionProps> {
  questionOptionSelected = (event: React.FormEvent) => {
    this.props.questionOptionSelected((event.target as HTMLInputElement).value)
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="radio" name={this.props.name} value={this.props.value} onChange={this.questionOptionSelected} /> {this.props.label}
      </div>
    )
  }
}

export default RatingOption;
