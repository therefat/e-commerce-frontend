import {toast}  from 'react-toastify'
export default function Toaster(message,type) {
    const successNotify = (v) => toast.success(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // progressClassName: "fancy-progress-bar",
      });
      const errorNotify = (v) => toast.error(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // progressClassName: "fancy-progress-bar",
      });
      const infoNotify = (v) => toast.info(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const warnNotify = (v) => toast.warn(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // progressClassName: "fancy-progress-bar",
      });
      const fancyNotify = (v) => toast(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // progressClassName: "fancy-progress-bar",
      });
      if(type==='success'){
        successNotify(message);
      }
      else if(type==='error'){
        errorNotify(message);
      }
      else if(type==='info'){
        infoNotify(message);
      }
      else if(type==='warn'){
        warnNotify(message);
      }
      else{
        fancyNotify(message);
      }
}