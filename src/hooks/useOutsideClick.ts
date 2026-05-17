import { useEffect, useRef } from "react";

export const useOutsideClick =<T extends HTMLElement> (handler : ()=>void, listenCapturing = true)=>{

 const modalRef = useRef<T | null>(null);

  useEffect(
    function () {
      function handleClick(e:MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          handler();
        }
      }

      function handleEscButton(e :KeyboardEvent)
      {
        if(e.code==='Escape')
        {
            handler() ;
        }
      }

      document.addEventListener("click", handleClick ,listenCapturing);
      document.addEventListener("keyup", handleEscButton ,listenCapturing);

      return ()=> {
        document.removeEventListener("click", handleClick,listenCapturing) ;
        document.removeEventListener("keyup", handleEscButton ,listenCapturing);
    };
    },
    [handler ,listenCapturing],
  );
  return modalRef ;
  }