'use client'

import { useSearchParams } from 'next/navigation'
import { useFormStatus } from 'react-dom'

const ContactForm: RFZ<{ searchParams: string | null }> = ({
  searchParams,
}) => {
  const { pending } = useFormStatus()
  const clientSP = useSearchParams()
  const isError = searchParams === 'error'
  const isPartners = searchParams === 'mitra' || clientSP.get('ctx') === 'mitra'

  return (
    <>
      <div>
        <p className='text-lg font-semibold'>Informasi Kontak</p>
        <div className='mt-1.5 space-y-3'>
          <div className='relative'>
            <input
              id='name'
              type='text'
              name='name'
              required
              disabled={pending}
              className='peer inline-flex h-16 w-full appearance-none items-center rounded-lg border border-zinc-300 px-3 pt-5 text-base -tracking-base'
            />
            <label
              htmlFor='name'
              className='absolute left-3 top-2.5 text-xs tracking-base text-gray-500 peer-focus:text-blue-600'
            >
              Nama
            </label>
          </div>
          <div className='relative'>
            <input
              id='email'
              type='email'
              name='email'
              required
              disabled={pending}
              className='peer inline-flex h-16 w-full appearance-none items-center rounded-lg border border-zinc-300 px-3 pt-5 text-base -tracking-base'
            />
            <label
              htmlFor='email'
              className='absolute left-3 top-2.5 text-xs tracking-base text-gray-500 peer-focus:text-blue-600'
            >
              Email
            </label>
          </div>
          <div className='relative flex flex-col'>
            <textarea
              id='address'
              name='address'
              required
              disabled={pending}
              className='peer inline-flex h-16 min-h-56 w-full appearance-none items-center rounded-lg border border-zinc-300 px-3 pt-7 text-base -tracking-base'
            />
            <label
              htmlFor='address'
              className='absolute left-3 top-2.5 text-xs tracking-base text-gray-500 peer-focus:text-blue-600'
            >
              Alamat
            </label>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <p className='text-lg font-semibold'>{"What's all about?"}</p>
        <div className='relative mt-1.5'>
          <select
            name='subject'
            id='subject'
            required
            disabled={pending}
            className='peer inline-flex h-16 w-full appearance-none items-center rounded-lg border border-zinc-300 bg-white px-3 pt-5 text-base -tracking-base'
            defaultValue={isPartners ? 'Mitra' : ''}
          >
            <option disabled value=''>
              SELECT ONE
            </option>
            <option value='Layanan'>Layanan</option>
            <option value='Pengaduan'>Pengaduan</option>
            <option value='Mitra'>Mitra</option>
          </select>
          <label
            htmlFor='hal'
            className='absolute left-3 top-2.5 text-xs tracking-base text-gray-500 peer-focus:text-blue-600'
          >
            Perihal
          </label>
        </div>
        <div className='relative mt-3 flex flex-col'>
          <textarea
            id='message'
            name='message'
            required
            disabled={pending}
            className='peer inline-flex h-16 min-h-56 w-full appearance-none items-center rounded-lg border border-zinc-300 px-3 pt-7 text-base -tracking-base'
          />
          <label
            htmlFor='message'
            className='absolute left-3 top-2.5 text-xs tracking-base text-gray-500 peer-focus:text-blue-600'
          >
            Pesan
          </label>
        </div>
      </div>
      <div className='mt-12'>
        <button
          type='submit'
          disabled={pending}
          className='text-amber-300r inline-flex h-14 w-full items-center justify-center rounded-lg bg-navy text-center font-semibold text-amber-300'
        >
          Kirim
        </button>
        {isError && (
          <p className='mt-2.5 text-center text-sm tracking-normal text-red-600'>
            Error while processing your request.
            Please&nbsp;try&nbsp;again&nbsp;later.
          </p>
        )}
      </div>
    </>
  )
}

export default ContactForm
