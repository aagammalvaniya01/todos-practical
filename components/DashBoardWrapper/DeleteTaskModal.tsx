import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { toast } from "react-toastify";

const DeleteTaskModal = ({open, handleClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '16px',
        boxShadow: 24,
        p: 4,
      };

      const handleConFirm = () =>{
        handleClose()
        toast.success("Task Deleted Successfully");
      }

  return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography color='#ec3838' fontWeight={600} id="modal-modal-title" textAlign={'center'} variant="h6" component="h2">
      Are You Sure ?
    </Typography>
    <Typography id="modal-modal-description" textAlign={'center'} sx={{ mt: 0.5 }}>
      You want to delete this Task ?
    </Typography>
    <Box display={'flex'} justifyContent={'center'} mt={2} alignItems={'center'} gap={2}>
        <Button variant="outlined" onClick={()=> handleClose()}>Cancel</Button>
        <Button variant='contained' onClick={()=> handleConFirm()}>Confirm</Button>
    </Box>
  </Box>
</Modal>
  )
}

export default DeleteTaskModal