import Dialog from '@mui/material/Dialog';
import errorImg from '../../images/error.svg'

const InvalidPassword = ({open, setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
            sx: { width: '300px', height: '150px'}
        }}
      >
        <div className='flex justify-center items-center w-full h-full gap-4'>
            <img src={errorImg} alt="" />
            <span className='text-xl'>Invalid Password</span>
        </div>
      </Dialog>
  );
}

export default InvalidPassword
