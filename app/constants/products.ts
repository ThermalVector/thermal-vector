import { Product, CategoryType } from './sharedTypes/sharedTypes'
import { moduleFeatureType } from './modulesTypes/modulesTypes'

export const products: Product[] = [
  {
    id: 1,
    name: 'ATOM905C',
    info: {
      description: 'High Resolution Shutterless Thermal Imaging Core 1280x1024/12um detector',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "No shutting with non-uniformity calibrating technology",
        "Super low power consumption: ≤1.8W",
        "Compact design",
        "Instantaneous boot: <5S",
        "Real time with no delaying image output",
        "High performance of temperature impact and",
        "environmental adaptability",
        "Strengthen structure, high anti-vibration&anti-shock level"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '1280*1024',
          pixelPitch: '12μm',
          netd: '≤35mk@ F1.0, 25 Hz,300K',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '35/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: '9 Pseudo color palettes changeable',
          resolution: '1280*1024'
        },
        interface: {
          powerInterface: 'DC:+3 V～5.5V',
          videoOutput: 'HDMI , 1280*1024@50Hz',
          seriesPort: 'UART（3.3V)',
          digitalVideo: 'RGB888',
          keyboard: 'According the firmware version'
        },
        general: {
          workingTemperature: '-20℃～+60℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-40℃～+60℃',
          powerConsumption: '≤1.8w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
          size: '42mm*42mm*32mm',
          weight: '<101g'
        }
      },
    }
  },
  {
    id: 2,
    name: 'ATOM505C',
    info: {
      description: 'Analog NST Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "640x512 resolution, 12μm pixel spacing",
        "Ultra low power consumption, low heat generation",
        "Uncooled VOx infrared FPA (Ceramic package)"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640×512',
          pixelPitch: '12μm',
          netd: '≤30mk@25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: 'Pseudo color palettes changeable',
          resolution: '768*576'
        },
        interface: {
          powerInterface: 'DC：5V(+3.5~+8.5V)',
          analogVideo: '2 line',
          seriesPort: 'UART 3.3V',
          digitalVideo: 'BT656(29.5MHz)/RGB888customized',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃-+55℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-40℃～+60℃',
          powerConsumption: '≤1.1w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18,testing 7 100g/6ms',
          size: '28mm*28mm*24.07mm',
          weight: '≤32g（no lens&Interface PCBA)'
        }
      },
    }
  },
  {
    // TODO: ничем не отличается от 505, уточнить у Коли
    id: 3,
    name: 'ATOM507C',
    info: {
      description: 'Analog NST Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "640x512 resolution, 12μm pixel spacing",
        "Ultra low power consumption, low heat generation",
        "Uncooled VOx infrared FPA (Ceramic package)"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640×512',
          pixelPitch: '12μm',
          netd: '≤30mk@25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: 'Pseudo color palettes changeable',
          resolution: '768*576'
        },
        interface: {
          powerInterface: 'DC：5V(+3.5~+8.5V)',
          analogVideo: '2 line',
          seriesPort: 'UART 3.3V',
          digitalVideo: 'BT656(29.5MHz)/RGB888customized',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃-+55℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-40℃～+60℃',
          powerConsumption: '≤1.1w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18,testing 7 100g/6ms',
          size: '28mmx28mmx22.9mm',
          weight: '≤32g（no lens&Interface PCBA)'
        }
      },
    }
  },
  {
    id: 4,
    name: 'M702C',
    info: {
      description: 'Analog NST Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "No shutting with non-uniformity calibrating technology (NUC)",
        "Super low power consumption less than 0.8W",
        "Compact design and light weight",
        "High performance of temperature impact and environmental adaptability"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: '9 Pseudo color palettes changeable',
          resolution: '768*576'
        },
        interface: {
          powerInterface: 'DC:+2.5V～5.5V',
          analogVideo: 'Double channels',
          seriesPort: 'RS232',
          digitalVideo: 'BT656(29.5MHz)',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃～+60℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-45℃～+65℃',
          powerConsumption: '≤0.8w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
          size: '20.8mm*41mm*42.5mm',
          weight: '<40g'
        }
      },
    }
  },
  {
    id: 5,
    name: 'M502C',
    info: {
      description: 'Analog NST Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "No shutting with non-uniformity calibrating technology (NUC)",
        "Super low power consumption less than 0.8W",
        "Compact design and light weight",
        "High performance of temperature impact and environmental adaptability"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: '9 Pseudo color palettes changeable',
          resolution: '640*480'
        },
        interface: {
          powerInterface: 'DC:+2.5V～5.5V',
          analogVideo: 'Double channels',
          seriesPort: 'RS232',
          digitalVideo: 'BT656(29.5MHz)',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃～+60℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-45℃～+65℃',
          powerConsumption: '≤1.1w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
          size: '18.1mm*41mm*42.3mm',
          weight: '<40g'
        }
      },
    }
  },
  {
    id: 6,
    name: 'ATOM502C',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "No shutting with non-uniformity calibrating technology",
        "Super low power consumption: ≤0.9W",
        "Compact design",
        "Instantaneous boot: <4S",
        "Real time with no delaying image output",
        "High performance of temperature impact and environmental adaptability",
        "Strengthen structure, high anti-vibration&anti-shock level"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: '9 Pseudo color palettes changeable',
          resolution: '640*480'
        },
        interface: {
          powerInterface: 'DC:+2.5V～5.5V',
          analogVideo: 'Double channels',
          seriesPort: 'RS232',
          digitalVideo: 'BT656(29.5MHz)',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃～+60℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-45℃～+65℃',
          powerConsumption: '≤0.9w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
          size: '25.9mm*28mm*28mm',
          weight: '<32g'
        }
      },
    }
  },
  {
    id: 7,
    name: 'ATOM702C',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "No shutting with non-uniformity calibrating technology",
        "Super low power consumption: ≤0.9W",
        "Compact design",
        "Instantaneous boot: <4S",
        "Real time with no delaying image output",
        "High performance of temperature impact and environmental adaptability",
        "Strengthen structure, high anti-vibration&anti-shock level"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '9/15/19/25/40/50mm etc'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'NST',
          noiseReduction: 'Digital filter',
          palette: '9 Pseudo color palettes changeable',
          resolution: '768*576'
        },
        interface: {
          powerInterface: 'DC:+2.5V～5.5V',
          analogVideo: 'Double channels',
          seriesPort: 'RS232',
          digitalVideo: 'BT656(29.5MHz)',
          keyboard: '4 buttons keyboard'
        },
        general: {
          workingTemperature: '-20℃～+60℃, for special using:-40℃～+60℃,5%～95%RH',
          storageTemperature: '-45℃～+65℃',
          powerConsumption: '≤0.9w',
          protectionLevel: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
          size: '21.1mm*28mm*28mm',
          weight: '<32g'
        }
      },
    }
  },
  {
    id: 8,
    name: 'TD-612C',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Dynamic trace free function - Always show a well-defined outline target and outstanding motion capture.",
        "Plug and play analog interface - Adopting analog output with 3 pin and power integrated, needless any parameters set up, more simple deployment for multiple applicable scenes.",
        "Optional athermalization lens - Either 9.1mm or 13mm althmalization lens as the option.",
        "Dynamic trace free technology - Self-developed dynamic shadow eliminating technology so as to weaken the interference of shadow of the moving target, which always obtains clear and distintct targets. Here pictures compared below."
      ],
      features: {
        item: {
          packagedType: 'Ceramic packaged detector',
          resolution: '640×512',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤30mk@25℃',
          lens: 'Optional, Athermalization：9.1mm/13mm/19mm/25mm/35mm'
        },
        imageEffect: {
          frameRate: 'Analog:25Hz; Digital:50Hz',
          startingTime: '≤12s',
          palette: '13 types option(white&black heat,red iron,lava,light green etc.)',
          imageAlgorithm: 'NUC/3DNR/DNS/DDE',
        },
        general: {
          imageInterface: 'Analog thermal core：CVBS+USB,Digital thermal core：MIPI-CSI+USB/DVP+USB',
          communicationMode: 'USB+UART',
          powerSupply: 'DC5V ±0.5V（common DC5V)',
          powerConsumption: '≤1.2W',
          size: '25.8mmx25.4mmx25.4mm(w/o)',
          weight: '27±1g（w/o)',
          workingTemperature: '-20℃-+60℃',
          storageTemperature: '-45℃-+65℃',
          antiVibration: 'Random vibration: 5.35grms，3 axis',
          shockResistance: 'Half sinusoid: 40g/11ms，3 axis',
        }
      },
    }
  },
  {
    id: 9,
    name: 'TD-312C',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Dynamic trace free function - Always show a well-defined outline target and outstanding motion capture.",
        "Plug and play analog interface - Adopting analog output with 3 pin and power integrated, needless any parameters set up, more simple deployment for multiple applicable scenes.",
        "Optional athermalization lens - Either 9.1mm or 13mm althmalization lens as the option.",
        "Dynamic trace free technology - Self-developed dynamic shadow eliminating technology so as to weaken the interference of shadow of the moving target, which always obtains clear and distintct targets. Here pictures compared below."
      ],
      features: {
        item: {
          packagedType: 'Ceramic packaged detector',
          resolution: '384×288',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤30mk@25℃',
          lens: 'Optional, Athermalization：9.1mm/13mm/19mm/25mm/35mm'
        },
        imageEffect: {
          frameRate: 'Analog:25Hz; Digital:50Hz',
          startingTime: '≤12s',
          palette: '13 types option(white&black heat,red iron,lava,light green etc.)',
          imageAlgorithm: 'NUC/3DNR/DNS/DDE',
        },
        general: {
          imageInterface: 'Analog thermal core：CVBS+USB,Digital thermal core：MIPI-CSI+USB/DVP+USB',
          communicationMode: 'USB+UART',
          powerSupply: 'DC5V ±0.5V（common DC5V)',
          powerConsumption: '≤1.2W',
          size: '25.8mmx25.4mmx25.4mm(w/o)',
          weight: '27±1g（w/o)',
          workingTemperature: '-20℃-+60℃',
          storageTemperature: '-45℃-+65℃',
          antiVibration: 'Random vibration: 5.35grms，3 axis',
          shockResistance: 'Half sinusoid: 40g/11ms，3 axis',
        }
      },
    }
  },
  {
    id: 10,
    name: 'TD-312E',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Dynamic trace free function - Always show a well-defined outline target and outstanding motion capture.",
        "Plug and play analog interface - Adopting analog output with 3 pin and power integrated, needless any parameters set up, more simple deployment for multiple applicable scenes.",
        "Optional athermalization lens - Either 9.1mm or 13mm althmalization lens as the option.",
        "Dynamic trace free technology - Self-developed dynamic shadow eliminating technology so as to weaken the interference of shadow of the moving target, which always obtains clear and distintct targets. Here pictures compared below."
      ],
      features: {
        item: {
          packagedType: 'Ceramic packaged detector',
          resolution: '384×288',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤30mk@25℃',
          lens: 'Fixed athermalization：9.1mm or 13mm',
        },
        imageEffect: {
          frameRate: '25Hz(analog output)',
          startingTime: '≤12s',
          palette: '13 types option(white&black heat,red iron,lava,light green etc.)',
          imageAlgorithm: 'NUC/3DNR/DNS/DDE',
        },
        general: {
          imageInterface: 'Analog thermal core：CVBS',
          powerSupply: 'DC5V ±0.5V（ common DC5V)',
          powerConsumption: '≤1.2W',
          size: '45.1mmx27mmx32mm(with 9.1mm lens)',
          weight: '62±2g（with 9.1mm lens)',
          workingTemperature: '-20℃~+60℃',
          storageTemperature: '-45℃-+65℃',
        }
      },
    }
  },
  {
    id: 11,
    name: 'TD-612E',
    info: {
      description: 'Mini Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Dynamic trace free function - Always show a well-defined outline target and outstanding motion capture.",
        "Plug and play analog interface - Adopting analog output with 3 pin and power integrated, needless any parameters set up, more simple deployment for multiple applicable scenes.",
        "Optional athermalization lens - Either 9.1mm or 13mm althmalization lens as the option.",
        "Dynamic trace free technology - Self-developed dynamic shadow eliminating technology so as to weaken the interference of shadow of the moving target, which always obtains clear and distintct targets. Here pictures compared below."
      ],
      features: {
        item: {
          packagedType: 'Ceramic packaged detector',
          resolution: '640×512',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤30mk@25℃',
          lens: 'Fixed athermalization：9.1mm or 13mm',
        },
        imageEffect: {
          frameRate: '25Hz(analog output)',
          startingTime: '≤12s',
          palette: '13 types option(white&black heat,red iron,lava,light green etc.)',
          imageAlgorithm: 'NUC/3DNR/DNS/DDE',
        },
        general: {
          imageInterface: 'Analog thermal core：CVBS',
          powerSupply: 'DC5V ±0.5V（ common DC5V)',
          powerConsumption: '≤1.2W',
          size: '45.1mmx27mmx32mm(with 9.1mm lens)',
          weight: '62±2g（with 9.1mm lens)',
          workingTemperature: '-20℃~+60℃',
          storageTemperature: '-45℃-+65℃',
        }
      },
    }
  },
  {
    id: 12,
    name: 'ThermEye3',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Multiple image process: IDE, HDR, 3DNR",
        "Support continuous digital zoom",
        "Professional photoelectric zooming technology",
        "Built-in video compression coding, easy for network transmission",
        "Easily integrated to third party platform"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Athermalization&motorizated',
          digitalZoom: "1~8x Continuous",
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized: 25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,sea-sky model etc',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: "RJ45 10 M/100 M/1000M self-adaptive Ethernet port",
          seriesPort: '1xRS485, 1xRS232',
          alarm: '1x ch input, 1x ch output',
          analogVideo: 'CVBS(75Ω)PAL',
          storage: 'Micro-SD(FT), up to 64GB',
        },
        network: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        general: {
          storageTemperature: '–45°C ~ +65°C',
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          powerConsumption: '<3W',
          size: '58.9mm*44mm*46mm',
          weight: '<110g (w/o lens)'
        }
      },
    }
  },
  {
    id: 13,
    name: 'ThermEye6',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Multiple image process: IDE, HDR, 3DNR",
        "Support continuous digital zoom",
        "Professional photoelectric zooming technology",
        "Built-in video compression coding, easy for network transmission",
        "Easily integrated to third party platform"
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          netd: '≤50mk@300K',
          spectralRange: '8~14μm',
          focusMethod: 'Athermalization&motorizated',
          digitalZoom: "1~8x Continuous",
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized: 25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,sea-sky model etc',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: "RJ45 10 M/100 M/1000M self-adaptive Ethernet port",
          seriesPort: '1xRS485, 1xRS232',
          alarm: '1x ch input, 1x ch output',
          analogVideo: 'CVBS(75Ω)PAL',
          storage: 'Micro-SD(FT), up to 64GB',
        },
        network: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        general: {
          storageTemperature: '–45°C ~ +65°C',
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          powerConsumption: '<3W',
          size: '62.2mm*44mm*46mm',
          weight: '<110g (w/o lens)'
        }
      },
    }
  },
  {
    id: 14,
    name: 'ThermEye3V',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "High sensitivity uncooled Vox detector",
        "Support continuous digital zoom",
        "Professional photoelectric zooming technology",
        "With ethernet and analog video interfaces",
        "Easily integrated to third party platform"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤40mk@300K',
          focusMethod: 'Athermalization&motorizated',
          digitalZoom: "1~8x Continuous",
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized: 25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,sea-sky model etc',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: "RJ45 10 M/100 M/1000M self-adaptive Ethernet port",
          seriesPort: '1xRS485, 1xRS232',
          alarm: '1x ch input, 1x ch output',
          analogVideo: 'CVBS(75Ω)PAL',
          storage: 'Micro-SD(FT), up to 64GB',
        },
        network: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        general: {
          storageTemperature: '–45°C ~ +65°C',
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          powerConsumption: '<3W',
          size: '60.9mm*44mm*46mm',
          weight: '<110g (w/o lens)'
        }
      },
    }
  },
  {
    id: 15,
    name: 'ThermEye6V',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "High sensitivity uncooled Vox detector",
        "Support continuous digital zoom",
        "Professional photoelectric zooming technology",
        "With ethernet and analog video interfaces",
        "Easily integrated to third party platform"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '640x512',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤40mk@300K',
          focusMethod: 'Athermalization&motorizated',
          digitalZoom: "1~8x Continuous",
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized: 25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,sea-sky model etc',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: "RJ45 10 M/100 M/1000M self-adaptive Ethernet port",
          seriesPort: '1xRS485, 1xRS232',
          alarm: '1x ch input, 1x ch output',
          analogVideo: 'CVBS(75Ω)PAL',
          storage: 'Micro-SD(FT), up to 64GB',
        },
        network: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        general: {
          storageTemperature: '–45°C ~ +65°C',
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          powerConsumption: '<3W',
          size: '61.4mm*44mm*46mm',
          weight: '<110g (w/o lens)'
        }
      },
    }
  },
  {
    id: 16,
    name: 'ThermEye-D32',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Built-in video compression coding, easy for network transmission;",
        "Intelligent high-temperature pre-alarming with variously adjustable grades",
        "Embedded intelligent analysis supports motion detection,line crossing detection, regional entry/exit detection",
        "Professional photoelectric zooming technology",
        "Abundant image algorithm: AGC, 3DNR, IDE"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤35mk@ 300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm Motorized:25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          commonFunction: 'password protection, access control with multi-user'
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-D32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Human&vehicle, fire detection'
        },
        network: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (768*576,384*288)',
          subStream: '25fps (384*288)',
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'SDK, third-party management platform, ONVIF ,CGI,ISAPI',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Authorized user, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V',
          networkInterface: "RJ45 10 M/100 M self-adaptive Ethernet",
          seriesPort: 'Dual TTL or 1x TTL with 1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<2W',
          protectionLevel: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
          size: '65.6mm*44mm*53mm',
          weight: '<130g (w/o lens)'
        }
      },
    }
  },
  {
    id: 17,
    name: 'ThermEye-D62',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Built-in video compression coding, easy for network transmission;",
        "Intelligent high-temperature pre-alarming with variously adjustable grades",
        "Embedded intelligent analysis supports motion detection,line crossing detection, regional entry/exit detection",
        "Professional photoelectric zooming technology",
        "Abundant image algorithm: AGC, 3DNR, IDE"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤35mk@ 300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm Motorized:25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          commonFunction: 'password protection, access control with multi-user'
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-D32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Human&vehicle, fire detection'
        },
        network: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (640*512)',
          subStream: '25fps (384*288)',
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'SDK, third-party management platform, ONVIF ,CGI,ISAPI',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Authorized user, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V',
          networkInterface: "RJ45 10 M/100 M self-adaptive Ethernet",
          seriesPort: 'Dual TTL or 1x TTL with 1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<2W',
          protectionLevel: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
          size: '65.6mm*44mm*53mm',
          weight: '<130g (w/o lens)'
        }
      },
    }
  },
  {
    id: 18,
    name: 'ThermEye-D67',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Built-in video compression coding, easy for network transmission;",
        "Intelligent high-temperature pre-alarming with variously adjustable grades",
        "Embedded intelligent analysis supports motion detection,line crossing detection, regional entry/exit detection",
        "Professional photoelectric zooming technology",
        "Abundant image algorithm: AGC, 3DNR, IDE"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '640x512',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤35mk@ 300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm Motorized:25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          commonFunction: 'password protection, access control with multi-user'
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-D32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Fire detection'
        },
        network: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (640*512)',
          subStream: '25fps (384*288)',
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'SDK, third-party management platform, ONVIF ,CGI,ISAPI',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Authorized user, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V',
          networkInterface: "RJ45 10 M/100 M self-adaptive Ethernet",
          seriesPort: 'Dual TTL or 1x TTL with 1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<2W',
          protectionLevel: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
          size: '65.6mm*44mm*53mm',
          weight: '<130g (w/o lens)'
        }
      },
    }
  },
  {
    id: 19,
    name: 'ThermEye-V32',
    info: {
      description: 'IP Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Lower power consumption;",
        "Intelligent high-temperature pre-alarming with various adjustable grades",
        "Embedded intelligent analysis supports motion; detection",
        "Line crossing detection, regional entry/exit detection",
        "Abundant image algorithm: AGC, 3DNR, IDE",
        "Support ONVIF protocol, easy to be integrated to third party and maintenance",
        "Higher accuracy of measurement ±8℃ (max)"
      ],
      features: {
        item: {
          detector: 'Uncooled VOx infrared FPA',
          resolution: '640x512',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤35mk@ 300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm Motorized:25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          commonFunction: 'password protection, access control with multi-user'
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-D32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Fire detection'
        },
        network: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (640*512)',
          subStream: '25fps (384*288)',
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'SDK, third-party management platform, ONVIF ,CGI,ISAPI',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Authorized user, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V',
          networkInterface: "RJ45 10 M/100 M self-adaptive Ethernet",
          seriesPort: 'Dual TTL or 1x TTL with 1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-40℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<2W',
          protectionLevel: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
          size: '65.6mm*44mm*53mm',
          weight: '<130g (w/o lens)'
        }
      },
    }
  },
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getCategories = (): string[] => {
  return [...new Set(products.map((product) => product.category))];
};

export const getFeaturedProducts = (count: number = 3): Product[] => {
  return products.slice(0, count);
};