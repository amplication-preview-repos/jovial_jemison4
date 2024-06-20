import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DoctorPersonalDataList } from "./doctorPersonalData/DoctorPersonalDataList";
import { DoctorPersonalDataCreate } from "./doctorPersonalData/DoctorPersonalDataCreate";
import { DoctorPersonalDataEdit } from "./doctorPersonalData/DoctorPersonalDataEdit";
import { DoctorPersonalDataShow } from "./doctorPersonalData/DoctorPersonalDataShow";
import { DoctorListList } from "./doctorList/DoctorListList";
import { DoctorListCreate } from "./doctorList/DoctorListCreate";
import { DoctorListEdit } from "./doctorList/DoctorListEdit";
import { DoctorListShow } from "./doctorList/DoctorListShow";
import { PatientTreatmentList } from "./patientTreatment/PatientTreatmentList";
import { PatientTreatmentCreate } from "./patientTreatment/PatientTreatmentCreate";
import { PatientTreatmentEdit } from "./patientTreatment/PatientTreatmentEdit";
import { PatientTreatmentShow } from "./patientTreatment/PatientTreatmentShow";
import { DoctorMedicalRecordsList } from "./doctorMedicalRecords/DoctorMedicalRecordsList";
import { DoctorMedicalRecordsCreate } from "./doctorMedicalRecords/DoctorMedicalRecordsCreate";
import { DoctorMedicalRecordsEdit } from "./doctorMedicalRecords/DoctorMedicalRecordsEdit";
import { DoctorMedicalRecordsShow } from "./doctorMedicalRecords/DoctorMedicalRecordsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VeterinariansService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DoctorPersonalData"
          list={DoctorPersonalDataList}
          edit={DoctorPersonalDataEdit}
          create={DoctorPersonalDataCreate}
          show={DoctorPersonalDataShow}
        />
        <Resource
          name="DoctorList"
          list={DoctorListList}
          edit={DoctorListEdit}
          create={DoctorListCreate}
          show={DoctorListShow}
        />
        <Resource
          name="PatientTreatment"
          list={PatientTreatmentList}
          edit={PatientTreatmentEdit}
          create={PatientTreatmentCreate}
          show={PatientTreatmentShow}
        />
        <Resource
          name="DoctorMedicalRecords"
          list={DoctorMedicalRecordsList}
          edit={DoctorMedicalRecordsEdit}
          create={DoctorMedicalRecordsCreate}
          show={DoctorMedicalRecordsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
