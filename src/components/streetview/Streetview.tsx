export function Streetview() {


  return (
    <div>

      {
        /**
        The `defer` attribute causes the callback to execute after the full HTML
        document has been parsed. For non-blocking uses, avoiding race conditions,
        and consistent behavior across browsers, consider loading using Promises.
        See https://developers.google.com/maps/documentation/javascript/load-maps-js-api
        for more information.
        **/
      }
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initialize&v=weekly"
        defer
      ></script>

    </div>
  )
}