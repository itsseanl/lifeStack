const jsonProducts = {
"products": [
    {
      "name": "Macbook Air",
      "price": "$999",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/mba.png"
    },
    {
      "name": "Custom Build",
      "price": "$780",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/carbide400c.png"
    },
    {
      "name": "HP 25es IPS FHD",
      "price": "$150",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/hp25es.png"
    },
    {
      "name": "iPad 6th Gen",
      "price": "$329",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/ipad.png"
    },
    {
      "name": "Logitech K840 Mechanical Keyboard",
      "price": "$70",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/k840.png"
    },
    {
      "name": "Logitech M570 Trackball Mouse",
      "price": "$50",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/m570.png"
    },
    {
      "name": "Pixel 2 XL",
      "price": "$850",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/pixel2xl.png"
    },
    {
      "name": "TCL 49' 4k HDR TV",
      "price": "$270",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/tcl49.png"
    },
    {
      "name": "Logitech z533 Desktop Speakers",
      "price": "$100",
      "description": "Aliquam pretium mi non faucibus dapibus. Integer ac urna ante. Donec tortor tellus, pulvinar et nisi id, auctor elementum tellus. Cras sed metus non metus suscipit faucibus. Donec varius ex nec vehicula tincidunt. In tempor risus ut finibus aliquam. Vivamus ipsum enim, pulvinar vel urna non, gravida ultrices nisl. Suspendisse potenti. Pellentesque vel risus sed quam fermentum mattis in at nisi. Quisque odio dui, aliquet vitae nisl interdum, tincidunt lacinia arcu. Sed blandit ex placerat, luctus nibh in, convallis est. Duis vel egestas diam, ornare ultricies erat",
      "image": "images/z533.png"
    }

]
};

export default jsonProducts;
