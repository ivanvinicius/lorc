import React, { FormEvent, useState } from 'react' //eslint-disable-line

import { Container, Input, Label } from '../styles/pages/radio.styles'

export default function Radio() {
  const [selectedCountry, setSelectedCountry] = useState('bra')
  return (
    <Container>
      <div>
        <Input
          id="ale"
          value="ale"
          type="radio"
          checked={selectedCountry === 'ale'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="ale">
          <img src={'images/ale.png'} alt="ale" />
          <span>ALE</span>
        </Label>
      </div>

      <div>
        <Input
          id="bra"
          value="bra"
          type="radio"
          checked={selectedCountry === 'bra'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="bra">
          <img src={'images/bra.png'} alt="bra" />
          <span>BRA</span>
        </Label>
      </div>

      <div>
        <Input
          id="esp"
          value="esp"
          type="radio"
          checked={selectedCountry === 'esp'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="esp">
          <img src={'images/esp.png'} alt="esp" />
          <span>ESP</span>
        </Label>
      </div>

      <div>
        <Input
          id="eua"
          value="eua"
          type="radio"
          checked={selectedCountry === 'eua'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="eua">
          <img src={'images/eua.png'} alt="eua" />
          <span>EUA</span>
        </Label>
      </div>

      <div>
        <Input
          id="ita"
          value="ita"
          type="radio"
          checked={selectedCountry === 'ita'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="ita">
          <img src={'images/ita.png'} alt="ita" />
          <span>ITA</span>
        </Label>
      </div>

      <div>
        <Input
          id="jap"
          value="jap"
          type="radio"
          checked={selectedCountry === 'jap'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="jap">
          <img src={'images/jap.png'} alt="jap" />
          <span>JAP</span>
        </Label>
      </div>

      <div>
        <Input
          id="mex"
          value="mex"
          type="radio"
          checked={selectedCountry === 'mex'}
          onChange={(e) => setSelectedCountry(String(e.target.value))}
        />
        <Label htmlFor="mex">
          <img src={'images/mex.png'} alt="mex" />
          <span>MEX</span>
        </Label>
      </div>
    </Container>
  )
}
