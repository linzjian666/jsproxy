addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname = "jsproxy.linzjian666.workers.dev";
     url.protocol = "https";
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)
