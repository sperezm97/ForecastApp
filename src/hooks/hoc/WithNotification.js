import React from "react";
import { Toast, Root } from "native-base";

export default WrappedComponent => {
  const sendNotification = (text, type) => {
    Toast.show({
      text,
      type,
      duration: 2500,
      buttonText: "Ok"
    });
  };
  return ({ ...props }) => (
    <Root>
      <WrappedComponent {...props} sendNotification={sendNotification} />
    </Root>
  );
};
