import _ from 'lodash';
import React, { PropTypes, PureComponent } from 'react';

import styles from './animated-keyboard.module.css';

// split into rows; each key string is defined as keyChar[:scale][:align]
// where key width = (scale * baseKeyWidth)
const keyboardRows = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete:1.5:right'],
  ['tab:1.5:left', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps lock:2:left', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'return:1.6:right'],
  ['shift:2.5:left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift:2.25:right'],
  ['fn:0.9:left', 'control:1.2', 'option:0.9', 'command:1.2:right', 'space:5.5', 'command:1.2', 'option:0.9:right', '<:0.9', '^', '>:0.9']
]

class AnimatedKeyboard extends PureComponent {
  static propTypes = {
    spellThis: PropTypes.string,
    highlightKeys: PropTypes.bool
  }
  state = {
    keyboardLowerCase: true,
    highlightedKey: null,
    highlightKeys: false
  }
  componentDidMount() {
    const { highlightKeys } = this.props;

    if (highlightKeys) {
      const spellThis = _.split(this.props.spellThis, '');
      const allKeys = _.flatMap(keyboardRows),
        highlightInterval = setInterval(() => {
          const { keyboardLowerCase } = this.state;
          const newState = {};
          newState.highlightedKey = spellThis.shift() || _.sample(allKeys);
          
          // every time caps lock is pressed (highlighted), change the keyboard case
          if (/caps/i.test(newState.highlightedKey)) { newState.keyboardLowerCase = !keyboardLowerCase; }

          this.setState(newState);
        }, 500);
      this.setState({ highlightInterval });
    }
  }
  componentWillUnmount() {
    const { highlightInterval } = this.state;
    if (highlightInterval) { clearInterval(highlightInterval); }
  }

  render() {
    const { highlightedKey, keyboardLowerCase } = this.state,
      baseKeyWidth = 60;

    return (
      <div className={styles.keyboard}>
        {keyboardRows.map((keys, index) => (
          <div key={index} className={styles.keyboardRow}>
            {keys.map((key, kIndex) => {
              const [keyChar, scale=1, align='center'] = key.split(':'),
                caseMethod = `to${((keyChar.length > 1) || keyboardLowerCase) ? 'Lower' : 'Upper' }Case`;
              return (
                <span
                  key={`${kIndex}_${keyChar}`}
                  className={`${styles.key} ${highlightedKey === key ? styles.highlightedKey : ''}`}
                  style={{ width: parseFloat(scale) * baseKeyWidth, textAlign: align }}
                >
                  {String.prototype[caseMethod].call(keyChar)}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default AnimatedKeyboard;