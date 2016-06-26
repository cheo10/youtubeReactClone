class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    }
  }

  onTitleClick(videoObject) {
    this.setState({
      currentVideo: videoObject
    })
  }


  componentDidMount() {
   this.props.searchYouTube({query: "cat", key: YOUTUBE_API_KEY, max: 5}, (data) => {this.setState({videos: data, currentVideo: data[0]})});
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} click={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
