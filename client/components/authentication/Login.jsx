import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/UserAction';

/**
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {

  /**
   * Creates an instance of Login.
   * @param {object} props
   *
   * @memberOf Login
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  /**
   * onEmail change event
   *
   * @param {object} event
   * @returns {object} object
   * @memberOf Login function
   */
  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }


  /**
   *onPassword change event
   *
   * @param {object} event
   * @return {undefined} nothing
   * @memberOf Login
   */
  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  /**
   *onClick save event for login
   *
   * @param {onClickSave} event
   * @return {undefined} nothing
   * @memberOf Login
   */
  onClickSave() {
    const email = this.state.email;
    const password = this.state.password;
    const userCredentials = { email, password };
    const { login } = this.props;
    login(userCredentials);
  }
  /**
     * renders the Login component
     *
     * @returns {void}
     * @memberOf Login
     */
  render() {
    return (
      <main>
        <center>
          <div className="section" />

          <h5 className="green-text">Login</h5>
          <div className="section" />

          <div className="container" style={{ width: 500 }}>
            <div className="z-depth-1 grey lighten-4 row customWidth">

              <div className="col s12">
                <div className="row">
                  <div className="col s12" />
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      className="validate" type="email"
                      name="email" id="icon_prefix"
                      onChange={this.onEmailChange}
                    />
                    <label
                      htmlFor="icon_prefix" data-error="wrong"
                      data-success="right"
                    >Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      className="validate" type="password"
                      name="password" id="password"
                      onChange={this.onPasswordChange}
                    />
                    <label
                      htmlFor="password" data-error="wrong"
                      data-success="right"
                    >Password</label>
                  </div>
                </div>
                <br />
                <center>
                  <div className="row">
                    <button
                      type="submit" name="btn_login"
                      className="col s12 btn btn-large waves-effect teal darken-2"// eslint-disable-line max-len
                      value="save"
                      onClick={this.onClickSave}
                    >Login</button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </center>

        <div className="section" />
        <div className="section" />
      </main>
    );
  }
}
Login.propTypes = {
  login: React.PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  login: userCredentials1 => dispatch(userActions.login(userCredentials1))
});

const mapStateToProps = state => ({
  users: state.user
});

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);

