import React, { useEffect, useImperativeHandle, useState } from "react";

function Auth({ onSubmit }, ref) {


    const [formDetails, setFormDetails] = useState({email: '', password: '', username: '', isLoading: false});

    function updateEmail(updatedEmail) {
        setFormDetails({...formDetails, email: updatedEmail});
    }

    function updatePassword(updatedPassword) {
        setFormDetails({...formDetails, password: updatedPassword});
    }

    function updateUsername(updateUsername) {
        setFormDetails({...formDetails, username: updateUsername});
    }

    function onFormSubmit() {
        setFormDetails({...formDetails, isLoading: true});
        onSubmit(formDetails, resetForm);
    }

    function resetForm() {
        setFormDetails({email: '', password: '', username: '', isLoading: false});
    }

    useImperativeHandle(ref, () => {
        return {
            resetFormData: resetForm
        }
    }, []);

    useEffect(() => {
        setFormDetails({email: '', password: '', username: '', isLoading: false});
    }, [])

    return (
        <>
            <div className="input-group">
                <input onChange={(e) => updateUsername(e.target.value)} value={formDetails.username} type="text" className="form-control" placeholder="Username" id="loginUsername"/>
            </div>
            <div className="input-group">
                <input onChange={(e) => updateEmail(e.target.value)} value={formDetails.email} type="email" className="form-control" placeholder="Email" id="loginUserEmail" />
            </div>
            <div className="input-group">
                <input onChange={(e) => updatePassword(e.target.value)} value={formDetails.password} type="password" className="form-control" placeholder="Password" id="loginPassword"/>
            </div>
            
            <div className="input-group">
            <button onClick={onFormSubmit} className="form-control btn btn-primary" type="button" disabled={formDetails.isLoading}>
            {(formDetails.isLoading) && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {(formDetails.isLoading) ? 'Loading...' : 'Submit'}
            </button>
            </div>
        </>
    )
}

export default React.forwardRef(Auth);