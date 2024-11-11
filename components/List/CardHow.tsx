import CardList from '@/components/List/Card'
import { tw } from '@/shared/lib'

const CardListHow = () => {
  return (
    <CardList
      title='Cara kerja kami'
      items={[
        {
          className: tw('bg-white !pb-14'),
          description: 'Melakukan konsultasi ide dan kebutuhan secara langsung dengan designer.', // prettier-ignore
          eyebrow: <></>,
          title: <>Konsultasi</>,
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Melakukan tinjau lokasi dan pengukuran untuk mendapatkan informasi secara detail guna memenuhi kebutuhan dalam desain dan pembangunan.', // prettier-ignore
          eyebrow: <></>,
          title: <>Survei</>,
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Mengaplikasikan ide dan kebutuhan kedalam bentuk denah dan 3D visual.', // prettier-ignore
          eyebrow: <></>,
          title: <>Denah dan 3D Visual</>,
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Melakukan penawaran harga sesuai ide dan kebutuhan, prose ini bisa melakukan pemilihan material by owner atau order by owner.', // prettier-ignore
          eyebrow: <></>,
          title: <>Rancangan Anggaran</>,
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Melakukan tanda tangan kontrak sesuai peretujuan.', // prettier-ignore
          eyebrow: <></>,
          title: <>Tanda Tangan Kontrak</>,
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Serah terima setelah proses pembangunan selesai dan memberikan jaminan pemeliharaan 1 bulan setelah pembangunan selesai', // prettier-ignore
          eyebrow: <></>,
          title: <>Serah Terima</>,
        },
      ]}
    />
  )
}

export default CardListHow
