import { Card } from '@mui/material';
import React from 'react';

export default function Widget(props) {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: props.theme.palette.cardBackground,
        color: props.theme.palette.fontColor,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore
      dolore atque non illum! Eos reiciendis culpa quam consectetur, itaque
      possimus mollitia ex. Consectetur est ratione expedita sequi odit natus.
      Natus voluptatum quo perspiciatis optio! Illo iusto quibusdam laboriosam
      laborum at sapiente, pariatur repellendus. Expedita dolorum nulla
      praesentium, eaque provident quidem, adipisci voluptates, quasi dolore
      tenetur necessitatibus suscipit. Accusantium, saepe. Ipsam ea sint
      consectetur dolores quo sed voluptatum eos fugiat corporis cum illum dolor
      odio perferendis laborum ullam nostrum veniam officia, doloribus
      laudantium praesentium perspiciatis ratione, nam eius! Earum,
      exercitationem! Ipsum explicabo repellendus dignissimos eaque ratione
      obcaecati veniam expedita possimus excepturi accusantium, dicta aut?
      Cupiditate nisi debitis officia tempore ullam dicta consequuntur ipsam
      quo? Harum praesentium laboriosam eaque omnis nostrum? Expedita nisi
      pariatur cupiditate ullam odio commodi velit error, enim nobis, architecto
      harum ab corrupti dolor labore minima exercitationem, optio molestiae
      minus praesentium quod veniam ea dolores? Itaque, quos quas? Aspernatur
      dignissimos labore molestias sunt enim, quos eum soluta mollitia, eligendi
      inventore nostrum est eaque aperiam dolorum qui rem tenetur. Quos quia
      quas repellendus architecto, maiores nobis iusto. Fuga, eveniet.
    </Card>
  );
}
