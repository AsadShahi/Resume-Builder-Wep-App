import React from "react";
import "./ChangePassword.css";
import {
  Card,
  CardContent,
 
} from "@mui/material";

export default function ChangePassword() {
  return (
    <section>
      <div className="container user-panel-parent" style={{ marginTop: "80px" }}>
        <Card>
          <h2 className="user-password-title">ChangePassword</h2>
          <CardContent>
            <form className="user-change-pass-form">
              <label>Previous Password</label>
              <input placeholder="Enter previous password" />
              <label>New Password</label>
              <input placeholder="Enter New password" />
              <label>Confirm Password</label>
              <input  placeholder="Confirm password" />
              <button className="user-change-pass-submit-btn" type=" submit">
                Submit
              </button >
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
