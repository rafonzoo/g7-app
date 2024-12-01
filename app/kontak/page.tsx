'use client'

import ContactForm from '@/app/kontak/_partials/Form'
import PageTemplate from '@/components/Template/Page'

const ContactPage = (props: { searchParams: { ctx: string | null } }) => {
  return (
    <PageTemplate
      title='Kontak'
      headline={
        <p className='mx-auto max-w-[462px]'>
          Jems Garden Residence, Ruko Jl. Inpres Raya No. 1D, RT.003 / RW. 004,
          Gaga, Kec. Larangan, Kota Tangerang, Banten&nbsp;15154
        </p>
      }
    >
      <form
        className='mx-auto mb-16 w-safe max-w-[470px] md:w-copy'
        onSubmit={(e) => {
          e.preventDefault()

          const formData = new FormData(e.currentTarget)
          const text = [
            `Nama: ${formData.get('name')}`,
            `Email: ${formData.get('email')}`,
            `Alamat: ${formData.get('address')}`,
            `Pesan: ${formData.get('message')}`,
          ].join('\n')

          window.open(
            'https://wa.me/+6289602949132?text=' + encodeURIComponent(text)
          )
        }}
      >
        <ContactForm
          key={props.searchParams.ctx}
          searchParams={props.searchParams.ctx}
        />
        <div className='mt-20'>
          <p className='text-lg font-semibold'>More ways to connect</p>
          <div className='mt-1.5'>
            <div className='flex flex-col space-y-1 text-blue-600'>
              <a href='tel:+6289602949132'>Telfon langsung</a>
              <a href='https://wa.me/089602949132' target='_blank'>
                Chat di WhatsApp
              </a>
            </div>
          </div>
        </div>
      </form>
    </PageTemplate>
  )
}

export default ContactPage
