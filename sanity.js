import 'react-native-url-polyfill/auto';
import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"



export const client = createClient({
    projectId: 'vwhtmbd6',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
    // token: 'skTAzF9sEgUGO1HQMvgZnHlPzmkw1GaDLssQY2zwHCB1SuYwe4gpcIoDUZkJ6GcwcZ8z03QRk6AVQK2F2X1CbNwWbpS7zmU8ba7q0YugqQk3hlJZobl8lE0mNqeZswYAFS3r6yEm16sSFpiHKA6ME1qL5QZxMAAojqHFYCeco6bzZ35qB8UF'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
