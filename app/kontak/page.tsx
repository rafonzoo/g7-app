import ContactForm from '@/app/kontak/_partials/Form'
import PageTemplate from '@/components/Template/Page'
import { sendEmail } from '@/actions/email'

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
        action={sendEmail}
        className='mx-auto mb-16 w-safe max-w-[470px] md:w-copy'
      >
        <ContactForm
          key={props.searchParams.ctx}
          searchParams={props.searchParams.ctx}
        />
        <div className='mt-20'>
          <p className='text-lg font-semibold'>More ways to connect</p>
          <div className='mt-1.5'>
            <div className='space-y-1 text-blue-600'>
              <p>Telfon langsung</p>
              <p>Chat di WhatsApp</p>
              <p>Chat melalui SMS</p>
            </div>
          </div>
        </div>
      </form>
    </PageTemplate>
  )
}

export default ContactPage
