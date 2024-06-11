
import { Avatar, Badge, } from 'antd';

import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  return (
    <Badge count={7}>
      <Avatar shape="square" size="large" icon={<i className="bi bi-cart4"></i>} />
    </Badge>
  );
}

export default CartWidget;

