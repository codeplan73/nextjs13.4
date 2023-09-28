import React from 'react'

interface Props {
  params: { id: number; photoId: number }
}

const UsersPhotos = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UsersPhotos {id} {photoId}
    </div>
  )
}

export default UsersPhotos
