class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userInfo: {
        login: "",
        avatar_url: "sadf",
      },
    };
    console.log(this.props.name + " child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " child component did mount");
    const fetch1 = await fetch("https://api.github.com/users/amirkhanhard");
    const data = await fetch1.json();

    this.setState({
      userInfo: data,
    });
    console.log(this.state.userInfo);
  }
  componentDidUpdate() {
    console.log(" component did update");
  }
  componentWillUnmount() {
    console.log(" component Will Unmount");
  }
  handleClick = (action = "") => {
    this.setState({
      count: action == "add" ? this.state.count + 1 : this.state.count - 1,
    });
  };
  render() {
    console.log(this.props.name + " child render");

    return (
      <>
        Testing goes here<br></br> {this.props.name}
        <br></br>
        {this.state.userInfo.login}
        <br></br>
        <img
          src={this.state.userInfo.avatar_url}
          style={{ width: "50px" }}
        ></img>
        <br></br>
        <span>COUNT = {this.state.count} </span>
        <button
          onClick={() => {
            this.handleClick("add");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          -
        </button>
      </>
    );
  }
}