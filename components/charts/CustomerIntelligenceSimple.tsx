'use client'

interface CustomerData {
  customerCompanyName: string
  yearEstablished: string
  headquartered: string
  noOfEmployees: string
  revenueTurnover: string
  geographicalPresence: string
  contactDetails: string
}

// Sample data with placeholder values
const sampleCustomerData: CustomerData[] = Array.from({ length: 9 }, () => ({
  customerCompanyName: 'xx',
  yearEstablished: 'xx',
  headquartered: 'xx',
  noOfEmployees: 'xx',
  revenueTurnover: 'xx',
  geographicalPresence: 'xx',
  contactDetails: 'xx'
}))

interface CustomerIntelligenceSimpleProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceSimple({ title = "Customer Intelligence Database", height }: CustomerIntelligenceSimpleProps) {
  return (
    <div className="w-full" style={height ? { height: `${height}px` } : undefined}>
      <h2 className="text-xl font-bold text-black mb-6">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#4A9B9B]">
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Customer Company Name
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Year Established
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Headquartered
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                No. of Employees (est.)(if available)
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Revenue/Turnover<br />(if available), (US$ Mn,<br />2024)Geographical Presence,<br />Revenue
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Geographical Presence
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white">
                Contact Details<br />(Website, email address,<br />contact details, address)
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleCustomerData.map((customer, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#E8F4F4]'}>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.customerCompanyName}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.yearEstablished}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.headquartered}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.noOfEmployees}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.revenueTurnover}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.geographicalPresence}</td>
                <td className="border border-[#4A9B9B] px-4 py-3 text-sm text-black">{customer.contactDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
