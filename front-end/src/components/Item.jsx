import React from "react";

const Item = () => {
  return (
    <a href="" className="flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51769178/original/457bcf2a-6982-4ab2-98be-c2f4b4482d0b.jpeg?im_w=720"
        alt=""
        className="aspect-square rounded-xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Cobertura, duplex em frente a praia das Dunas, Cabo Frio.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
