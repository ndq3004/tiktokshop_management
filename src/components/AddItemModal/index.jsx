import React from "react";
import {
  Modal,
  Fade,
  Backdrop,
  FormControl,
  TextField,
  Button,
  Divider,
  MenuItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import { convertToBase64 } from "../../utils/imageUtils";
import InputNumberTextField from "../InputNumberTextField";
export default function AddItemModal({ open, onAddItemSuccess, onCloseModal }) {
  const classes = useStyles();

  const [newItem, setNewItem] = React.useState({
    itemName: "",
    currency: "VND",
    unitId: "Chiếc",
    unitName: "",
    quantity: 0,
    price: 0,
    amount: 0,
    amountOC: 0,
  });

  const [selectedImage, setSelectedImage] = React.useState({
    name: "",
    data: null,
  });

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
    {
      value: "VND",
      label: "đ",
    },
  ];

  const units = [
    {
      label: "Chiếc",
      value: "Chiếc",
    },
    {
      label: "Thùng",
      value: "Thùng",
    }
  ]

  const handleClose = () => {
    onCloseModal();
  };

  const changeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      convertToBase64(e.target.files[0])
        .then((base64) => {
          debugger;
          setSelectedImage({
            name: e.target.files[0].name,
            data: base64,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleChangeCurrency = (e) => {
    setNewItem({...newItem, currency: e.target.value})
  };

  const handleChangeUnit = (e) => {
    setNewItem({...newItem, unitId: e.target.value})
  };

  const getDateTimeNow = () => {
    const now = new Date();

    return `${now
      .toISOString()
      .slice(0, 10)}T${now.getHours()}:${now.getMinutes()}`;
  };

  const calculateAmount = () => {
    setNewItem((current) => (current.amount = current.quantity * current.price))
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={true}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <h2 id="transition-modal-title">Tạo sản phẩm</h2>
            <CloseIcon />
          </div>
          <FormControl className={classes.formControl} noValidate>
            <div className={classes.textField}>
              <TextField id="standard-basic" label="Tên sản phẩm" />
              <div className={classes.inputImage}>
                <Button variant="contained" component="label">
                  Chọn ảnh sản phẩm
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={changeImage}
                  />
                </Button>
                <p>{selectedImage.name}</p>
              </div>
              {selectedImage.data && (
                <img width={300} height={300} src={selectedImage.data} />
              )}
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className={classes.formControlRight}>
              <div className={classes.textField}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Đơn vị tính"
                  value={newItem.unitId}
                  onChange={handleChangeUnit}
                  helperText=""
                  className={classes.textFieldCurrency}
                >
                  {units.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Loại tiền"
                  value={newItem.currency}
                  onChange={handleChangeCurrency}
                  helperText=""
                  className={classes.textFieldUnit}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <InputNumberTextField label="Số lượng" value={newItem.quantity} onChange={calculateAmount} />
              </div>
              <div>
                <InputNumberTextField label="Đơn giá" prefix value={newItem.quantity} onChange={calculateAmount} />
              </div>
              <div className={classes.textField}>
                <TextField
                  id="datetime-local"
                  label="Giờ nhập"
                  type="datetime-local"
                  defaultValue={getDateTimeNow()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className={classes.textField}>
                <h4>Tổng tiền: </h4>
                <h4>{newItem.amount}</h4>
              </div>
            </div>
          </FormControl>
        </div>
      </Fade>
    </Modal>
  );
}
