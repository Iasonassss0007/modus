'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import '@/app/map/map.css'

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface MapControllerProps {
  userLocation: [number, number] | null
}

function MapController({ userLocation }: MapControllerProps) {
  const map = useMap()

  useEffect(() => {
    map.invalidateSize()

    // Fly to user location when available
    if (userLocation) {
      map.flyTo(userLocation, 13, {
        duration: 2,
      })
    }
  }, [map, userLocation])

  return null
}

export default function WorldMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [locationError, setLocationError] = useState(false)

  useEffect(() => {
    // Get user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation([latitude, longitude])
        },
        (error) => {
          console.error('Error getting location:', error)
          setLocationError(true)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      )
    } else {
      setLocationError(true)
    }
  }, [])

  return (
    <MapContainer
      center={userLocation || [20, 0]}
      zoom={userLocation ? 13 : 2}
      minZoom={2}
      maxZoom={18}
      style={{ height: '100%', width: '100%' }}
      zoomControl={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      attributionControl={false}
    >
      {/* Lighter dark theme tile layer - CartoDB Dark (no labels) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
        className="map-tiles-light-dark"
      />
      <TileLayer
        attribution=''
        url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom={20}
        className="map-labels"
      />

      <MapController userLocation={userLocation} />
    </MapContainer>
  )
}
