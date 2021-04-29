import React, { useState, useEffect } from 'react';

const EditDelete = ({ editAction, deleteAction, editDeleteTarget }) => {

    const [confirmationMenuVisible, setConfirmationMenuVisible] = useState(false);

    return (
        <div>
            <button>Edit</button>
            <button>Delete</button>
            {confirmationMenuVisible &&
                <div>
                    <h1>Are you sure you want to delete this {editDeleteTarget}</h1>
                    <p>
                        Deleting this {editDeleteTarget} is irreversible, you WILL NOT be able to undo
                        this action, only confirm with yes if you are 100% sure. <br/><br/>
                        Do you really want to delete this?
                    </p>
                    <div>
                        <button>Actually no</button>
                        <button>For sure, yes</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditDelete;