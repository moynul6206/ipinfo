async function getIPDetails() {
    const ipInput = document.getElementById('ipInput');
    const resultDiv = document.getElementById('result');

    const ipAddress = ipInput.value;
    if (!ipAddress) {
        resultDiv.innerHTML = 'Please enter an IP address.';
        return;
    }

    try {
        const response = await fetch(`https://ipinfo.io/widget/demo/${ipAddress}`);
        const data = await response.json();

        const ipData = data.data;

        resultDiv.innerHTML = `
            <p><strong>IP Address:</strong> ${ipData.ip}</p>
            <p><strong>Hostname:</strong> ${ipData.hostname}</p>
            <p><strong>City:</strong> ${ipData.city}</p>
            <p><strong>Region:</strong> ${ipData.region}</p>
            <p><strong>Country:</strong> ${ipData.country}</p>
            <p><strong>Location:</strong> ${ipData.loc}</p>
            <p><strong>Postal Code:</strong> ${ipData.postal}</p>
            <p><strong>Timezone:</strong> ${ipData.timezone}</p>
            <p><strong>ASN:</strong> ${ipData.asn.asn}</p>
            <p><strong>ASN Name:</strong> ${ipData.asn.name}</p>
            <p><strong>ASN Domain:</strong> ${ipData.asn.domain}</p>
            <p><strong>ASN Route:</strong> ${ipData.asn.route}</p>
            <p><strong>ASN Type:</strong> ${ipData.asn.type}</p>
            <p><strong>Company Name:</strong> ${ipData.company.name}</p>
            <p><strong>Company Domain:</strong> ${ipData.company.domain}</p>
            <p><strong>Company Type:</strong> ${ipData.company.type}</p>
            <p><strong>VPN:</strong> ${ipData.privacy.vpn}</p>
            <p><strong>Proxy:</strong> ${ipData.privacy.proxy}</p>
            <p><strong>Tor:</strong> ${ipData.privacy.tor}</p>
            <p><strong>Relay:</strong> ${ipData.privacy.relay}</p>
            <p><strong>Hosting:</strong> ${ipData.privacy.hosting}</p>
            <p><strong>Service:</strong> ${ipData.privacy.service}</p>
            <p><strong>Abuse Address:</strong> ${ipData.abuse.address}</p>
            <p><strong>Abuse Country:</strong> ${ipData.abuse.country}</p>
            <p><strong>Abuse Email:</strong> ${ipData.abuse.email}</p>
            <p><strong>Abuse Name:</strong> ${ipData.abuse.name}</p>
            <p><strong>Abuse Network:</strong> ${ipData.abuse.network}</p>
            <p><strong>Abuse Phone:</strong> ${ipData.abuse.phone}</p>
            <p><strong>Google Maps Location:</strong> <a href="https://www.google.com/maps/place/${ipData.loc}" target="_blank">View on Google Maps</a></p>
        `;
    } catch (error) {
        resultDiv.innerHTML = 'Error fetching IP details.';
    }
}
