import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  MouseEvent,
  FocusEvent,
} from "react";
import clsx from "clsx";
import { Tooltip } from "antd";

interface CustomInputProps {
  defaultValue: string;
  saveText: (val: string) => void;
  cancelEdit: () => void;
  className?: string;
  checkIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  customStyles?: React.CSSProperties;
}

function CheckDefaultIcon() {
  return (
    <span style={{ marginLeft: "5px", color: "green", cursor: "pointer" }}>
      &#10004;
    </span>
  );
}

function CloseDefaultIcon() {
  return (
    <span style={{ marginLeft: "5px", color: "red", cursor: "pointer" }}>
      &#10008;
    </span>
  );
}

export const CustomInput: React.FC<CustomInputProps> = (
  props: CustomInputProps
) => {
  const {
    defaultValue,
    saveText,
    cancelEdit,
    className,
    checkIcon = <CheckDefaultIcon />,
    closeIcon = <CloseDefaultIcon />,
    customStyles = {
      border: "1px solid black",
      borderRadius: "0.2rem",
      padding: "0.4rem",
    },
  } = props;

  const [value, setValue] = useState<string>(defaultValue);
  const [isEmpty, setIsEmpty] = useState<boolean>(value === "");

  const updateText = () => {
    if (!isEmpty) {
      saveText(value);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(e.target.value);
    setIsEmpty(newValue === "");
  };

  // const onBlur = (e: FocusEvent) => {
  //   cancelEdit();
  // };

  return (
    <div>
      {isEmpty && (
        <Tooltip color="red" title="Field is required" placement="rightBottom">
          <input
            onChange={handleChange}
            value={value}
            className={clsx(className)}
            style={customStyles}
            required
          />
          <button onClick={updateText}>{checkIcon}</button>
          <button onClick={cancelEdit}>{closeIcon}</button>
        </Tooltip>
      )}
      {!isEmpty && (
        <>
          <input
            ref={inputRef}
            onChange={handleChange}
            // onBlur={onBlur}
            value={value}
            className={clsx(className)}
            style={customStyles}
          />
          <button onClick={updateText}>{checkIcon}</button>
          <button onClick={cancelEdit}>{closeIcon}</button>
        </>
      )}
    </div>
  );
};

function Index(props: { initialValue: string }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState<string>(`${props.initialValue}`);

  const handleEdit = () => {
    setEdit(true);
  };

  const save = (val: string) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <p onDoubleClick={handleEdit}>{value}</p>
      ) : (
        <CustomInput defaultValue={value} saveText={save} cancelEdit={close} />
      )}
    </>
  );
}

export default Index;
