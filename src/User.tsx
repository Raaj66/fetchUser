import { useEffect, useState } from "react";
import { ApiService } from "./service/ApiService";
import "./userStyles.css";

const apiService = new ApiService();

export default function User() {
  const [userData, setUserData] = useState<any>();

  const fetchDetails = async () => {
    //   ApiCall
    const resp = await apiService.fetchDetails();
    if (resp.status === 200) {
      // Push response to LocalStorage
      localStorage.setItem("userData", JSON.stringify(resp?.data?.results));
      //  Pop response from localStorage
      const fetchDataFromLocalStorage: any = await localStorage.getItem(
        "userData"
      );
      // handling parse error
      if (fetchDataFromLocalStorage) {
        try {
          setUserData(JSON.parse(fetchDataFromLocalStorage));
        } catch (error) {
          console.log("error", error);
        }
      }
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log("userData", userData);

  return (
    <div>
      {userData?.map((item: any) => {
        return (
          <div className="wrapper">
            <div>
              <label>Full Name</label> <br />
              <span>
                {item?.name?.first} - {item?.name?.last}
              </span>
              <br /> <br />
            </div>
            <div>
              <label>Email</label> <br />
              <span>{item?.email}</span>
            </div>
            <br />
            <br />
            <div>
              <button onClick={() => fetchDetails()}>Refresh</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
