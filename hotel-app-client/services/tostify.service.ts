import { toast } from 'react-toastify'


//making dynamic tostify 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config:any = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const sucesstoast = (message: string) => {
    toast.success(message,config)
}

export const errortoast = (message: string) => {
    toast.error(message,config)
}