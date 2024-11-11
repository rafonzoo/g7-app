import CardList from '@/components/List/Card'
import { tw } from '@/shared/lib'

const CardListWhy = () => {
  return (
    <CardList
      title={'Kenapa memilih\xA0kami?'}
      items={[
        {
          className: tw('bg-white !pb-14'),
          description: 'Konsultasi ide, desain, kebutuhan dan rancangan biaya tanpa dipungut biaya.', // prettier-ignore
          eyebrow: <></>,
          title: (
            <>
              Gratis
              <br />
              Konsultasi
            </>
          ),
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Pilih dan tentukan sendiri material dan komponen yang diinginkan.', // prettier-ignore
          eyebrow: <></>,
          title: (
            <>
              Garansi
              <br />
              Pelayanan
            </>
          ),
        },
        {
          className: tw('bg-white !pb-14'),
          description: 'Memberikan layanan pemeliharan setelah pekerjaan selesai.', // prettier-ignore
          eyebrow: <></>,
          title: (
            <>
              Produk
              <br />
              dan Kualitas
            </>
          ),
        },
      ]}
    />
  )
}

export default CardListWhy
