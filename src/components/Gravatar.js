import React from "react";
import md5 from "md5";

class Gravatar extends React.Component {
  render() {
    const email = this.props.email;
    const hash = md5(email);

    return (
      <div>
        <img
          className={this.props.className}
          src={`https://s.gravatar.com/avatar/${hash}?d=identicon`}
          alt="User"/>
      </div>
    );
  }
}

export default Gravatar;
