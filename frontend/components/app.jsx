import React from 'react';
import TruckUploadFormContainer from './truck/truck_upload_form_container';
import TruckDisplayContainer from './truck/truck_display';
import JobUploadFormContainer from './job/job_upload_form';

const App = () => (
  <div>
    <TruckUploadFormContainer />
    <JobUploadFormContainer />
    <TruckDisplayContainer />
  </div>
);

export default App;
