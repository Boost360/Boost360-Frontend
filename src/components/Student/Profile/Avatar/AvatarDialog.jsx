import React, { useState, useCallback } from 'react'
import Dialog from '@mui/material/Dialog';
import Cropper from 'react-easy-crop';
import { Slider } from '@material-ui/core';
import './AvatarDialog.css'
import { DialogTitle } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { getRotatedImage, getCroppedImg } from './CanvasUtils';
import { getOrientation } from 'get-orientation/browser';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


/**
 * Avatar Editor
 * 
 * @author Zach Wang
 * @param {*} param0 
 * @returns 
 */

const Input = styled('input')({
    display: 'none',
});

const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}


const AvatarDialog = ({ user, setUser, handleClose, open }) => {
    const [loading, setLoading] = React.useState(false)
    const [imageSrc, setImageSrc] = React.useState(user.avatar)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [rotation, setRotation] = useState(0)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
      }, [])

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }

            setImageSrc(imageDataUrl)
        }
    }

    const handleSave = async () => {
        setLoading(true);
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
            
        } catch (e) {
            console.error(e)
        }


    }



    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={open}
                onClose={handleClose}
            >
                <DialogTitle >
                    Change Avatar
                </DialogTitle>
                <div className="crop-container">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 4}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className="controls">
                    <div className="avatar-label"> Zoom</div>
                    <div className="avatar-slider ">
                        <Slider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e, zoom) => setZoom(zoom)}
                            classes={{ root: 'slider' }}
                        />

                    </div>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onFileChange} />
                        <Button variant="outlined" component="span" startIcon={<AddPhotoAlternateOutlinedIcon />}>
                            Change Photo
                        </Button>
                    </label>
                    <LoadingButton
                        onClick={handleSave}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </LoadingButton>
                </div>
            </Dialog >

        </div >
    )
}


function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

export default AvatarDialog;