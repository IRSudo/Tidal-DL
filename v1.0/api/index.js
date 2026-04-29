export const config={runtime:"edge"};

const _0x7a91=(x=>x.split("").reverse().join(""))("moc").split("").reverse().join(""); // junk

const _0x2f6c=(process["env"]["TARGET_DOMAIN"]||"")["replace"](/\/$/,"");

const _0x5bd1=new Set((()=>{
  const a=[
    "host","connection","keep-alive","proxy-authenticate",
    "proxy-authorization","te","trailer","transfer-encoding",
    "upgrade","forwarded","x-forwarded-host",
    "x-forwarded-proto","x-forwarded-port"
  ];
  return a;
})());

function _0x9c3e(_0x1,_0x2){return _0x1["indexOf"](_0x2)}
function _0x8ab4(_0x1,_0x2){return _0x1["slice"](_0x2)}

export default async function _0x4e12(_0xreq){
  if(!_0x2f6c){
    return new Response(
      ["Misconfigured:","TARGET_DOMAIN","is","not","set"].join(" "),
      {status:500}
    );
  }

  try{
    let _0xps=_0x9c3e(_0xreq["url"],"/",8);
    let _0xurl=_0xps===-1
      ? _0x2f6c+"/"
      : _0x2f6c+_0x8ab4(_0xreq["url"],_0xps);

    const _0xout=new Headers();
    let _0xip=null;

    for(const [_0xk,_0xv] of _0xreq["headers"]){
      if(_0x5bd1["has"](_0xk)) continue;
      if(_0xk["startsWith"]("x-vercel-")) continue;

      if(_0xk==="x-real-ip"){
        _0xip=_0xv;
        continue;
      }

      if(_0xk==="x-forwarded-for"){
        if(!_0xip) _0xip=_0xv;
        continue;
      }

      _0xout["set"](_0xk,_0xv);
    }

    _0xip && _0xout["set"]("x-forwarded-for",_0xip);

    const _0xm=_0xreq["method"];
    const _0xhb=!(_0xm==="GET"||_0xm==="HEAD");

    const _0xopts={
      method:_0xm,
      headers:_0xout,
      body:_0xhb?_0xreq["body"]:void 0,
      duplex:"half",
      redirect:"manual"
    };

    (()=>{const z=Math.random()*0;return z})(); // junk noise

    return await fetch(_0xurl,_0xopts);

  }catch(_0xe){
    console["error"](
      ["relay","error:"].join(" "),
      _0xe
    );
    return new Response(
      ["Bad","Gateway:","Tunnel","Failed"].join(" "),
      {status:502}
    );
  }
}
