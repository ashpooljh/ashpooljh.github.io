var iceStats = null;

function parseMusic (inp)
{
  iceStats = inp.icestats? inp.icestats : null;
}

function cap1st(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getIceInfo (stream_name)
{
  if (!iceStats || !iceStats.source) return null;
  s = null;
  src = iceStats.source;
  if (src.constructor === Array)
  {
    for (var i = 0; i < src.length; i++)
    {
      if (src[i].server_name == stream_name)
      {
        s = src[i];
        break;
      }
    }
  }
  else
  {
    if (iceStats.source.server_name == stream_name) s = iceStats.source;
  }

  if (!s) return null;

  return {
    "artist": s.artist? s.artist : "unknown artist",
    "title": s.title? s.title : "unknown track",
    "listeners": "listeners" in s? s.listeners : "unknown"
  };
}

function getIceInfoHtml (stream)
{
  info = getIceInfo (stream);
  if (!info)
    return '<span class="warning">Stream seems down.</span><br><br>';
  else
    return cap1st(info.artist) + " &mdash; " + info.title + "<br>"
      + "Listeners: " + info.listeners;
}
