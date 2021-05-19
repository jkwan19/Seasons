const Loading = ({message}) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>

  )
}

Loading.defaultProps = {
  message: "Loading..."
}
export default Loading;