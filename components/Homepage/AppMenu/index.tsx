import { FunctionComponent } from "react";

import { Alarm, BackspaceFill } from "@emotion-icons/bootstrap";
const AppMenu: FunctionComponent = () => {

  return (
    <div className="grid grid-cols-4">
      <div>
        <Alarm size={32} />
      </div>
      <div>
          <BackspaceFill size={48} />
        Yasin & Tahlil
      </div>
      <div>
        Ratib
      </div>
      <div>
        Jadwal Shalat
      </div>
    </div>
  )
}

export default AppMenu;