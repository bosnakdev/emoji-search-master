import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    const clickEmoji = (e) => {
      e.target.innerHTML = "Copied!";
      setTimeout(() => {
        e.target.innerHTML = "Click to copy emoji";
      }, 3000);
    }
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info" onClick={(e) => clickEmoji(e)}>Click to copy emoji</span>
      </div>
    );
  }
}
