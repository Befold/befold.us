import React, { Component } from 'react';
import { isTouchEnabled } from '@utility/device';

let boundRect = { x: null, y: null };

export default class Hero extends Component {
	state = {
		mouseY: null,
		mouseY: null,
		mouseOver: false,
		scrollY: 0
	};

  element = null;

  boundSetBoundingLimits = () => this.setBoundingLimits();

  componentDidMount() {
    if (!isTouchEnabled()) {
      window.addEventListener('resize', this.boundSetBoundingLimits);
      this.setBoundingLimits();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.boundSetBoundingLimits);
  }

  setBoundingLimits() {
    const {
      offsetWidth: x,
      offsetHeight: y
    } = this.container;

    boundRect = { x, y }
  }

  onMouseMove(event) {
    if (!isTouchEnabled()) {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY
      });
    }
  }

  renderText() {
		return (
      <div className="animation">
        <h1>We build user-centric experiences - <i>at scale.</i></h1>
      </div>
    );
  }

  render() {
    const x = -(this.state.mouseX - (boundRect.x / 2));
    const y = this.state.mouseY - (boundRect.y / 2);

    const style = !isTouchEnabled()
      ? {
        backgroundPositionX: `${50 - (x / 100)}%`,
        backgroundPositionY: `${50 - (y / 100)}%`
      }
      : null;

    return (
      <section className="hero"
        style={style}
        onMouseMove={event => this.onMouseMove(event)}
        ref={element => { this.container = element; }}>

        {this.renderText()}
			</section>
		);
	}
}
