import React from 'react';

function ProfileForm() {
  return (
    <div>
      <form method="POST" action="/profile-upload-single" encType="multipart/form-data">
        <div>
          <label>Upload profile picture</label>
          <input type="file" name="image" required />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>

      <hr />

      <form method="POST" action="/profile-upload-multiple" encType="multipart/form-data">
        <div>
          <label>Upload multiple profile pictures</label>
          <input type="file" name="profile-files" required multiple />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
