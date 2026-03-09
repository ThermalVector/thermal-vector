import { ProductType } from './types/productTypes'
import { CategoryType } from './types/categoryTypes'

export const products: ProductType[] = [
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18,testing 7 100g/6ms',
          size: '28mm*28mm*24.07mm',
          weight: '≤32g（no lens&Interface PCBA)'
        }
      },
    }
  },
  {
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18,testing 7 100g/6ms',
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
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
          protection: 'Shock resistance, vibration:GJB150-16 2.3.1, shock:GJB150-18, testing 7 100g/6ms',
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
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
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
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm; Motorized: 25/35/40/50/75mm etc.',
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
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
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
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
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
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
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
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (768*576,384*288)',
          subStream: '25fps (384*288)',
        },
        network: {
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
          protection: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
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
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (640*512)',
          subStream: '25fps (384*288)',
        },
        network: {
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
          protection: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
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
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '25fps (640*512)',
          subStream: '25fps (384*288)',
        },
        network: {
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
          protection: 'Anti-static protection, ESD contact 2KV, air contact 4KV',
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
          uniformityCalibration: 'Auto/manual shutter & background correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-V32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Human&vehicle, fire detection'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '30fps (768*576,384*288)',
          subStream: '30fps (384*288)',
        },
        network: {
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
          seriesPort: '1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<1.5W',
          size: '37.9mm*44mm*45mm',
          weight: '<100g (w/o lens)'
        }
      },
    }
  },
  {
    id: 20,
    name: 'ThermEye-V62',
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
          pixelPitch: '12μm',
          spectralRange: '8~14μm',
          netd: '≤35mk@ 300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm Motorized:25/35/40/50/75mm etc.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter & background correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+150℃',
          accuracyMeasurement: '±8℃',
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
        },
        smartFunction: {
          highTemperatureAlarm: 'Yes, support rule to be set',
          vca: '4 VCA types for ThermEye-V32 only (motion detection, cross line, intrusion, area entry and exit)',
          ai: 'Fire detection'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '30fps (640*512)',
          subStream: '30fps (384*288)',
        },
        network: {
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
          seriesPort: '1x RS485',
          alarm: '1x ch input, 1x ch output',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +75°C',
          powerConsumption: '<1.5W',
          size: '37.9mm*44mm*45mm',
          weight: '<100g (w/o lens)'
        }
      },
    }
  },
  {
    id: 21,
    name: 'iThermal-T3',
    info: {
      description: 'IP Thermographic Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Full screen measurement function",
        "Support event analysis of temperature image",
        "Compact module design, convenient integration",
        "Powerful image process: AGC, 3DNR, IDE",
        "With original data for analysis",
      ],
      features: {
        item: {
          detector: 'Uncooled a-Si infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: '6.6mm（iThermal-T3 only),9.6mm,15mm,19mm,25mm etc, Motorized：25mm，35mm,50mm etc,',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,Linear model',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+400°C',
          accuracyMeasurement: '±5°C/±5%（max)',
          measurementMethod: 'Point/Line/Area/Frame etc',
          rawData: 'Yes'
        },
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: 'RJ45 10 M/100 M/1000 M self-adaptive Ethernet',
          seriesPort: '1x RS232, 1x RS485',
          analogVideo: 'CVBS(75Ω)PAL',
          alarm: '1x ch input, 1x ch output',
          storage: 'Micro-SD(FT) up to 64GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '<3W',
          size: '58.9mm*44mm*46mm',
          weight: '<110g（w/o lens'
        }
      },
    }
  },
  {
    id: 22,
    name: 'iThermal-T6',
    info: {
      description: 'IP Thermographic Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Full screen measurement function",
        "Support event analysis of temperature image",
        "Compact module design, convenient integration",
        "Powerful image process: AGC, 3DNR, IDE",
        "With original data for analysis",
      ],
      features: {
        item: {
          detector: 'Uncooled a-Si infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: '6.6mm（iThermal-T3 only),9.6mm,15mm,19mm,25mm etc, Motorized：25mm，35mm,50mm etc,',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,Linear model',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),  palette customizable',
          intelligentFunctions: 'Motion detection, cross line, intrusion, area entry and exit. Automatic detection(human, vehicle and vessel), tracking, PIP',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+400°C',
          accuracyMeasurement: '±5°C/±5%（max)',
          measurementMethod: 'Point/Line/Area/Frame etc',
          rawData: 'Yes'
        },
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (640*480)',
          subStream: '25fps (352*288)',
        },
        network: {
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: 'RJ45 10 M/100 M/1000 M self-adaptive Ethernet',
          seriesPort: '1x RS232, 1x RS485',
          analogVideo: 'CVBS(75Ω)PAL',
          alarm: '1x ch input, 1x ch output',
          storage: 'Micro-SD(FT) up to 64GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '<3W',
          size: '62.2mm*44mm*46mm',
          weight: '<110g（w/o lens'
        }
      },
    }
  },
  {
    id: 23,
    name: 'iThermal-S3',
    info: {
      description: 'Stable Thermomgraphic Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "High frame frequency image for rapid object",
        "High accurate temperature measurement range",
        "High range ability temperature measurement scale",
        "Rapid response stabilization measurement, well-adapted environment",
      ],
      features: {
        item: {
          detector: 'Uncooled a-Si infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: '6.6mm（iThermal-S3 only),10mm，15mm,19mm,25mm etc,.Motorized：25mm，35mm,50mm etc,.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,Linear model',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),palette customizable',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+400°C',
          accuracyMeasurement: '±2°C/±2% (max.)',
          measurementMethod: 'Point/Line/Area/Frame, etc.',
          rawData: 'Yes'
        },
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (720*576)',
          subStream: '25fps (352*288)',
        },
        network: {
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'RJ45 10 M/100 M/1000M self-adaptive Ethernet port',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: 'RJ45 10 M/100 M/1000 M self-adaptive Ethernet',
          seriesPort: '1x RS232, 1x RS485',
          analogVideo: 'CVBS(75Ω)PAL',
          alarm: '1x ch input, 1x ch output',
          storage: 'Micro-SD(FT) up to 64GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '<3W',
          size: '66.4mm*44mm*46mm',
          weight: '<300g（w/o lens)'
        }
      },
    }
  },
  {
    id: 24,
    name: 'iThermal-S6',
    info: {
      description: 'Stable Thermomgraphic Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "High frame frequency image for rapid object",
        "High accurate temperature measurement range",
        "High range ability temperature measurement scale",
        "Rapid response stabilization measurement, well-adapted environment",
      ],
      features: {
        item: {
          detector: 'Uncooled a-Si infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: '6.6mm（iThermal-S3 only),10mm，15mm,19mm,25mm etc,.Motorized：25mm，35mm,50mm etc,.',
          sunProtection: "Support, but as less as toward sun"
        },
        imageEffect: {
          imageAdjustmen: 'Auto/manual adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR,Linear model',
          palette: '9 colors opted( rust, rainbow, white/black, etc.),palette customizable',
        },
        measurementTemperature: {
          temperatureRange: '-20℃~+400°C',
          accuracyMeasurement: '±2°C/±2% (max.)',
          measurementMethod: 'Point/Line/Area/Frame, etc.',
          rawData: 'Yes'
        },
        videoAudio: {
          videoCompression: 'H.264',
          mainStream: '25fps (640*480)',
          subStream: '25fps (352*288)',
        },
        network: {
          protocols: 'TCP/IP,ICMP,HTTP,DHCP,DNS,RTP,RTSP,RTCP,IGMP,802.1X,ONVIF(ProfileS)',
          api: 'RJ45 10 M/100 M/1000M self-adaptive Ethernet port',
          commonFunction: 'Hearbet, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: 'Up to 10 channels',
          userHostLevel: 'Up to 10 users, 3 levels: Administrator, Operator, General'
        },
        interface: {
          powerInterface: 'DC12V（+9V～+15V)',
          networkInterface: 'RJ45 10 M/100 M/1000 M self-adaptive Ethernet',
          seriesPort: '1x RS232, 1x RS485',
          analogVideo: 'CVBS(75Ω)PAL',
          alarm: '1x ch input, 1x ch output',
          storage: 'Micro-SD(FT) up to 64GB',
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '<3W',
          size: '66.4mm*44mm*46mm',
          weight: '<300g（w/o lens)'
        }
      },
    }
  },
  {
    id: 25,
    name: 'Quantum700-D',
    info: {
      description: 'Security Analog Thermal imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Powerful IDE image detail enhancement algorithm",
        "Leading HDR (Wide Dynamic Range) processing technology",
        "Professional photoelectric zooming technology",
        "Support digital video output",
        'Extensible interfaces for further development',
        'Various uncooled infrared detector: a-Si and Vox'
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized:25/35/40/50/75mm etc.',
          digitalZoom: '1~8x Continuous'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR',
          palette: '9 Pseudo color palettes changeable',
        },
        interface: {
          powerInterface: 'DC:12V（+9~+15V',
          analogVideo: '720*576,PAL, CVBS（75Q） PAL/NTSC （Optional)',
          seriesPort: 'RS485/RS232/RS422',
          digitalVideo: 'BT656'
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '≤1.5w',
          size: '37.8mm*47mm*46.9mm',
          weight: '＜105g'
        }
      },
    }
  },
  {
    id: 26,
    name: 'Quantum500-D',
    info: {
      description: 'Security Analog Thermal imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        "Powerful IDE image detail enhancement algorithm",
        "Leading HDR (Wide Dynamic Range) processing technology",
        "Professional photoelectric zooming technology",
        "Support digital video output",
        'Extensible interfaces for further development',
        'Various uncooled infrared detector: a-Si and Vox'
      ],
      features: {
        item: {
          detector: 'Noncrystalline infrared FPA',
          resolution: '640x480',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤50mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized:25/35/40/50/75mm etc.',
          digitalZoom: '1~8x Continuous'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Auto/manual shutter correction',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR',
          palette: '9 Pseudo color palettes changeable',
        },
        interface: {
          powerInterface: 'DC:12V（+9~+15V',
          analogVideo: '720*576,PAL, CVBS（75Q） PAL/NTSC （Optional)',
          seriesPort: 'RS485/RS232/RS422',
          digitalVideo: 'BT656'
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '≤1.8w',
          size: '41.2mm*47mm*46.9mm',
          weight: '＜105g'
        }
      },
    }
  },
  {
    id: 27,
    name: 'Quantum700V-D',
    info: {
      description: 'High Sensitivity Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        'Leading HDR (Wide Dynamic Range) processing technology',
        'Professional photoelectric zooming technology',
        'Support digital video & analog video output',
        'Various types of uncooled infrared detectors: a-Si and Vox',
      ],
      features: {
        item: {
          detector: 'Uncooled Vox infrared FPA',
          resolution: '384x288',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤40mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized:25/35/40/50/75mm etc.',
          digitalZoom: '1~8x Continuous'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR',
          palette: '9 Pseudo color palettes changeable',
        },
        interface: {
          powerInterface: 'DC:12V（+9~+15V)',
          analogVideo: '720*576,PAL, CVBS（75Q） PAL/NTSC （Optional)',
          seriesPort: 'RS485/RS232/RS422',
          networkInterface: 'RS485/RS232/RS422',
          digitalVideo: 'BT656'
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '≤1.5w',
          size: '40.2mm*47mm*46.9mm',
          weight: '＜105g'
        }
      },
    }
  },
  {
    id: 28,
    name: 'Quantum500V-D',
    info: {
      description: 'High Sensitivity Analog Thermal Imaging Core',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalCore,
      featuresShort: [
        'Leading HDR (Wide Dynamic Range) processing technology',
        'Professional photoelectric zooming technology',
        'Support digital video & analog video output',
        'Various types of uncooled infrared detectors: a-Si and Vox',
      ],
      features: {
        item: {
          detector: 'Uncooled Vox infrared FPA',
          resolution: '640x512',
          pixelPitch: '17μm',
          spectralRange: '8~14μm',
          netd: '≤40mk@300K',
          focusMethod: 'Athermalization&motorizated',
          lens: 'Fixed lens: 9/15/19/25/35/40/50mm;Motorized:25/35/40/50/75mm etc.',
          digitalZoom: '1~8x Continuous'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter',
          noiseReduction: '3DNR',
          imageProcess: 'IDE,HDR',
          palette: '9 Pseudo color palettes changeable',
        },
        interface: {
          powerInterface: 'DC:12V（+9~+15V)',
          analogVideo: '720*576,PAL, CVBS（75Q） PAL/NTSC （Optional)',
          seriesPort: 'RS485/RS232/RS422',
          digitalVideo: 'BT656'
        },
        general: {
          workingTemperature: '-20℃～+60℃，＜ 90％RH',
          storageTemperature: '–45°C ~ +65°C',
          powerConsumption: '≤1.8w',
          size: '40.7mm*47mm*46.9mm',
          weight: '＜105g'
        }
      },
    }
  },
  {
    id: 29,
    name: 'HS3',
    info: {
      description: 'Outdoor IP Thermal Image Bullet Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit;',
        'Thermal image smart function: Multiple targets types detection',
        'Advanced fire/smoke detection algorithm',
        'Excellent image enhancement: AGC, IDE',
        'User-friendly platform: Standard ONVIF protocol, fast compatible with the third-party platform',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc.;',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Motorized',
          lens: '7 / 10 / 17 / 25 / 35 / 50mm',
          fov: '36.4x27.7 / 25.9x19.6 / 15.4x11.6 / 10.5x7.9 / 7.5x5.6 / 5.2x3.9'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter',
          imageProcess: 'AGC, IDE',
          palette: 'Optional 9 color palettes (rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types excluding HS6 (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
        },
        measurementTemperature: {
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          temperatureRange: '-20 °C ~+ 135 °C',
          accuracyMeasurement: '± 8 °C(± 14.4 °F)'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '768*576, 384*288',
          audio: 'External sound pick-ip only'
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'DC 12V/POE',
          powerConsumption: '＜2W (w/o IR)',
          workingTemperature: '-20°C~60°C, <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP67',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '407mmx143mmx113mm',
          weight: '＜2.3Kg'
        }
      },
    }
  },
  {
    id: 30,
    name: 'HS6',
    info: {
      description: 'Outdoor IP Thermal Image Bullet Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit;',
        'Thermal image smart function: Multiple targets types detection',
        'Advanced fire/smoke detection algorithm',
        'Excellent image enhancement: AGC, IDE',
        'User-friendly platform: Standard ONVIF protocol, fast compatible with the third-party platform',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc.;',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Motorized',
          lens: '10 / 17 / 25 / 35 / 50mm',
          fov: '42x34 / 25.4x20.4 / 17.4x14 / 12.5x10 / 8.7x7'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter',
          imageProcess: 'AGC, IDE',
          palette: 'Optional 9 color palettes (rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          fireDetection: 'Support',
        },
        measurementTemperature: {
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          temperatureRange: '-20 °C ~+ 135 °C',
          accuracyMeasurement: '± 8 °C(± 14.4 °F)'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: '640*512, 384*288',
          audio: 'External sound pick-ip only'
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'DC 12V/POE',
          powerConsumption: '＜3W (w/o IR)',
          workingTemperature: '-20°C~60°C, <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP67',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '407mmx143mmx113mm',
          weight: '＜2.3Kg'
        }
      },
    }
  },
  {
    id: 31,
    name: 'HM2',
    info: {
      description: 'Outdoor IP Dual Spectrum Bullet Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality: 12μm thermal sensor, 4MP 1/2.8”CMOS visible sensor;',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit;',
        'Thermal image smart function: Multiple targets types detection',
        'Advanced fire/smoke detection algorithm',
        'Excellent image enhancement: AGC, IDE',
        'User-friendly platform: Standard ONVIF protocol, fast compatible with the third-party platform',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc.;',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '256x192',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Fixed lens',
          lens: '3.6 / 7 / 10',
          fov: '50x37 / 24.8x18.6 / 17x13'
        },
        opticalModule: {
          imageSensor: '1/2.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '4 / 6 / 8 mm',
          fov: '80*56.7 / 54*29 / 41.4*23.9',
          irRange: '30 mm'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types excluding HS6 (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
          soundLightAlarm: 'Add speakers and embedded flashing lights alarm',
        },
        measurementTemperature: {
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          temperatureRange: '-20 °C ~+ 135 °C',
          accuracyMeasurement: '± 8 °C(± 14.4 °F)'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 384*288，256*192',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288',
          audio: 'Sound pick-up'
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'DC 12V/POE',
          powerConsumption: '3W(w/o IR)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP67',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '315mmx96mmx96mm',
          weight: '＜1.6Kg'
        }
      },
    }
  },
  {
    id: 32,
    name: 'HM3',
    info: {
      description: 'Outdoor IP Dual Spectrum Bullet Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality: 12μm thermal sensor, 4MP 1/2.8”CMOS visible sensor;',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit;',
        'Support temperature measurement with multiple rules',
        'Advanced fire/smoke detection algorithm',
        'Excellent image enhancement: AGC, IDE',
        'Image effect: Image fusion, PIP',
        'User-friendly platform: Standard ONVIF protocol, fast compatible with the third-party platform',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc.;',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Motorized',
          lens: '7 / 10 / 17 / 25 / 35 mm',
          fov: '36.4x27.7 / 25.9x19.6 / 15.4x11.6 / 10.5x7.9 / 7.5x5.6'
        },
        opticalModule: {
          imageSensor: '1/2.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '4 / 6 / 8 / 12 mm',
          fov: '80*56.7 / 54*29 / 41.4*23.9 / 28*23.9',
          irRange: '50 mm'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for HM3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
          soundLightAlarm: 'Add speakers and embedded flashing lights alarm',
        },
        measurementTemperature: {
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          temperatureRange: '-20 °C ~+ 135 °C',
          accuracyMeasurement: '± 8 °C(± 14.4 °F)'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 768*576,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 768*576,384*288',
          audio: 'Sound pick-up'
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'DC 12V/POE',
          powerConsumption: '＜2W(w/o IR & heater)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP67',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '407mmx143mmx113mm',
          weight: '＜2.2Kg'
        }
      },
    }
  },
  {
    id: 33,
    name: 'HM6',
    info: {
      description: 'Outdoor IP Dual Spectrum Bullet Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality: 12μm thermal sensor, 4MP 1/2.8”CMOS visible sensor;',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit;',
        'Support temperature measurement with multiple rules',
        'Advanced fire/smoke detection algorithm',
        'Excellent image enhancement: AGC, IDE',
        'Image effect: Image fusion, PIP',
        'User-friendly platform: Standard ONVIF protocol, fast compatible with the third-party platform',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc.;',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Motorized',
          lens: '10 / 17 / 25 / 35 mm',
          fov: '42x34 / 25.4x20.4 / 17.5x14 / 12.5x10'
        },
        opticalModule: {
          imageSensor: '1/2.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '6 / 8 / 12 mm',
          fov: '54*29 / 41.4*23.9 / 28*23.9',
          irRange: '50 mm'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          fireDetection: 'Support',
          soundLightAlarm: 'Add speakers and embedded flashing lights alarm',
        },
        measurementTemperature: {
          measurementMethod: '3 temperature measurement rule types (points, areas, lines)',
          temperatureRange: '-20 °C ~+ 135 °C',
          accuracyMeasurement: '± 8 °C(± 14.4 °F)'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 640*512,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 640*512,384*288',
          audio: 'Sound pick-up'
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'DC 12V/POE',
          powerConsumption: '＜3W(w/o IR )',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP67',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '407mmx143mmx113mm',
          weight: '＜2.2Kg'
        }
      },
    }
  },
  {
    id: 34,
    name: 'QG3',
    info: {
      description: 'Dual Spectrum High Speed PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 2MP 1/2.8” CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking;',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray, pan: 0.01°~180°/s, tilt: 0.01°~130°/s high speed rotation，preset：±0.1',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '7 / 10 / 17 / 25 / 35 / 50 mm',
          fov: '36.4x27.7 / 25.9x19.6 / 15.4x11.6 / 10.5x7.9 / 7.5x5.6 / 5.2*3.9'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '6.5-240mm, 37X',
          fov: '70.0-2.51(wide to narrow)',
          irRange: '50 mm'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for QG3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
          soundLightAlarm: 'Add speakers and embedded flashing lights alarm',
        },
        measurementTemperature: {
          temperatureRange: '3 temperature measurement rule types (points, areas, lines).',
          accuracyMeasurement: '-20°C~+ 135°C',
          measurementMethod: '± 8 °C (± 14.4 °F)'
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt:-15°～+90°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.01°~180°/s',
          tiltSpeed: '0.01°~130°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 768*576,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'AC 24V,3A',
          powerConsumption: '＜36W',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: 'Ø237.6mm*373mm',
          weight: '＜5.5Kg(with bracket)'
        }
      },
    }
  },
  {
    id: 35,
    name: 'QG6',
    info: {
      description: 'Dual Spectrum High Speed PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 2MP 1/2.8” CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking;',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray, pan: 0.01°~180°/s, tilt: 0.01°~130°/s high speed rotation，preset：±0.1',
        'Superior environmental adaptability: Applicable for extreme weather, including darkness, rain, fog, smog and etc',
        'Complete customizability'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '10 / 17 / 25 / 35 / 50 mm',
          fov: '42x34 / 25.4x20.4 / 17.5x14 / 12.5x10 / 8.7x7'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '6.5-240mm, 37X',
          fov: '70.0-2.51(wide to narrow)',
          irRange: '50 mm'
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          fireDetection: 'Support',
          soundLightAlarm: 'Add speakers and embedded flashing lights alarm',
        },
        measurementTemperature: {
          temperatureRange: '3 temperature measurement rule types (points, areas, lines).',
          accuracyMeasurement: '-20°C~+ 135°C',
          measurementMethod: '± 8 °C (± 14.4 °F)'
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt:-15°～+90°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.01°~180°/s',
          tiltSpeed: '0.01°~130°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 640*512',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          powerSupply: 'AC 24V,3A',
          powerConsumption: '＜36W',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: 'Ø237.6mm*373mm',
          weight: '＜5.5Kg(with bracket)'
        }
      },
    }
  },
  {
    id: 36,
    name: 'CH3',
    info: {
      description: 'Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'Built-in high sensitivity infrared thermal camera realizes clear infrared images without any light, perfect for dark night voyage',
        'Design of the magnetic composite sucker, simple operation with the one-key deployment',
        'Embedded gyroscopic image stabilization system',
        'Leading thermal image processing technology: adaptive AGC, IDE',
        'Optional laser ranging or laser illumination'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '30-150mm / 30-180mm',
          fov: '8.75*6.57~1.76*1.32 / 8.75*6.57~1.46*1.10'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '1920(H)×1080(V)',
          lens: '15-775mm, 52X',
          fov: '29.1-0.5(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for CH3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -45°～+45°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.01°~80°/s',
          tiltSpeed: '0.01°~80°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 1920*1080,1280*720, Thermal - 768*576,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          laserRangingIllumination: 'Optional',
          gyroscopes: 'Optional',
          powerSupply: 'DC48V,10A',
          powerConsumption: '＜270W(with heater)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: 'φ500mm×795mm',
          weight: '＜90Kg(with bracket)'
        }
      },
    }
  },
  {
    id: 37,
    name: 'CH6',
    info: {
      description: 'Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'Built-in high sensitivity infrared thermal camera realizes clear infrared images without any light, perfect for dark night voyage',
        'Design of the magnetic composite sucker, simple operation with the one-key deployment',
        'Embedded gyroscopic image stabilization system',
        'Leading thermal image processing technology: adaptive AGC, IDE',
        'Optional laser ranging or laser illumination'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '30-150mm / 30-180mm',
          fov: '14.59*11.69~2.93*2.35 / 14.59*11.69~2.44*1.96'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '1920(H)×1080(V)',
          lens: '15-775mm, 52X',
          fov: '29.1-0.5(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -45°～+45°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.01°~80°/s',
          tiltSpeed: '0.01°~80°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 1920*1080,1280*720, Thermal - 640*512',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          laserRangingIllumination: 'Optional',
          gyroscopes: 'Optional',
          powerSupply: 'DC48V,10A',
          powerConsumption: '＜270W(with heater)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: 'φ500mm×795mm',
          weight: '＜90Kg(with bracket)'
        }
      },
    }
  },
  {
    id: 38,
    name: 'TG3',
    info: {
      description: 'Middle and Long Distance Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 4MP 1/1.8”CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray',
        'Superior environmental adaptability: Applicable for extreme weather including darkness, rain, fog, smog and etc.',
        'Easily integrated with the third party'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '50 / 75 mm',
          fov: '5.2*3.9 / 3.5*2.6'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '6.5-240mm, 37X',
          fov: '70.0-2.51(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for TG3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -70°～+45°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.4°~40°/s',
          tiltSpeed: '0.2°~10°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 768*576,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          wiper: 'Optional',
          powerSupply: 'DC24V,5A',
          powerConsumption: '＜30W(with heater)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '349mmx275mmx426mm',
          weight: '＜20Kg'
        }
      },
    }
  },
  {
    id: 39,
    name: 'TG6',
    info: {
      description: 'Middle and Long Distance Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 4MP 1/1.8”CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray',
        'Superior environmental adaptability: Applicable for extreme weather including darkness, rain, fog, smog and etc.',
        'Easily integrated with the third party'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '50 / 75 mm',
          fov: '8.7*7 / 8.7*7'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '2560(H)×1440(V)',
          lens: '6.5-240mm, 37X',
          fov: '70.0-2.51(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -70°～+45°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.4°~40°/s',
          tiltSpeed: '0.2°~10°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 2560*1440,1920*1080,1280*720, Thermal - 640*512',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          wiper: 'Optional',
          powerSupply: 'DC24V,5A',
          powerConsumption: '＜30W(with heater)',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '349mmx275mmx426mm',
          weight: '＜20Kg'
        }
      },
    }
  },
  {
    id: 40,
    name: 'TH3',
    info: {
      description: 'Middle and Long Distance Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 2MP 1/1.8”CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray',
        'Superior environmental adaptability: Applicable for extreme weather including darkness, rain, fog, smog and etc.',
        'Easily integrated with the third party'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '384x288',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '25-100mm / 30-150mm / 30-180mm',
          fov: '10.47*7.87~2.64*1.98 / 8.75*6.57~1.76*1.32 / 8.75*6.57~1.46*1.10'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '1920(H)×1080(V)',
          lens: '15-775mm, 52X',
          fov: '29.1-0.5(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for TH3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -55°～+60°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.2°~30°/s',
          tiltSpeed: '0.3°~13°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 1920*1080,1280*720, Thermal - 768*576,384*288',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          laserRangingIllumination: 'Optional',
          wiper: 'Optional',
          powerSupply: 'DC48V,5A',
          powerConsumption: '＜80W',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '720mmx388mmx550mm',
          weight: '＜50Kg'
        }
      },
    }
  },
  {
    id: 41,
    name: 'TH6',
    info: {
      description: 'Middle and Long Distance Dual Spectrum PTZ Camera',
      price: '9.999,00 ₽',
      category_id: CategoryType.thermalSecurityCamera,
      featuresShort: [
        'High image quality:12μm thermal sensor, 2MP 1/1.8”CMOS visible sensor',
        'Powerful behavior analysis algorithm: Line crossing, intrusion, region entry & exit',
        'Advanced AI algorithm: Multiple targets types detection and tracking',
        'Excellent image enhancement: AGC, IDE',
        'Rugged PTZ: Aluminium alloy material, waterproof aviation interface, anti-salt spray',
        'Superior environmental adaptability: Applicable for extreme weather including darkness, rain, fog, smog and etc.',
        'Easily integrated with the third party'
      ],
      features: {
        item: {
          detector: 'VOx Uncooled FPA',
          resolution: '640x512',
          pixelPitch: '12μm',
          netd: '＜35mK@ 25℃',
          spectralRange: '8~14μm',
          focusMethod: 'Manual/Motorized(auto focus)',
          lens: '25-100mm / 30-150mm / 30-180mm',
          fov: '17.46*14~4.4*3.52 / 14.59*11.69~2.93*2.35 / 14.59*11.69~2.44*1.96'
        },
        opticalModule: {
          imageSensor: '1/1.8” Progressive Scan CMOS',
          resolution: '1920(H)×1080(V)',
          lens: '15-775mm, 52X',
          fov: '29.1-0.5(wide to narrow)',
        },
        imageEffect: {
          imageAdjustmen: 'Auto adjustment for contrast ratio & brightness & acutance',
          uniformityCalibration: 'Manual/Auto shutter, background corrextion',
          imageProcess: 'AGC, IDE',
          imageFusion: 'Support',
          palette: 'Optional 9 color palettes(rust, rainbow, white/black, etc.)',
        },
        smartFunction: {
          vca: '4 VCA types for TH3 only (motion detection, cross line, intrusion, area entry and exit)',
          fireDetection: 'Support',
        },
        ptz: {
          movementRange: 'Pan:360° continuous; Tilt: -55°～+60°',
          presets: '200',
          powerMemory: 'Support',
          panSpeed: '0.2°~30°/s',
          tiltSpeed: '0.3°~13°/s',
          autoHorizontalScan: 'Preset patrol / Auto line scanning & etc'
        },
        videoAudio: {
          videoCompression: 'H.264/H.265',
          mainStream: 'Visible - 1920*1080,1280*720, Thermal - 640*512',
          subStream: 'Visible - 1280*720,768*576,640*480,384*288, Thermal - 384*288',
          audioCompression: 'G.711',
        },
        network: {
          protocols: 'IPv4/IPv6,HTTP,HTTPS,FTP,DNS,NTP,RTSP,TCP,UDP,DHCP',
          api: 'ISAPI,SDK, third-party management platform, ONVIF',
          commonFunction: 'Hearbet, password protection, multi-user access control',
          security: 'Support password protection, bonding MAC ID, IP filtration',
          simultaneousLiveView: '10 channels',
          userHostLevel: 'Up to 9 users, 3 levels: Administrator, Operator, General',
          webBrowser: 'Google Kernel Browser, Edge'
        },
        interface: {
          alarm: '1x ch input, 1x ch output',
          audio: '1x ch input, 1x ch output',
          seriesPort: '1x ch RS485',
          networkInterface: 'RJ45 10 M/100 M self-adaptive Ethernet',
          storage: 'Embedded EMMC 16GB',
        },
        general: {
          webClientLanguage: 'English',
          laserRangingIllumination: 'Optional',
          wiper: 'Optional',
          powerSupply: 'DC48V,5A',
          powerConsumption: '＜80W',
          workingTemperature: '-20°C~+60°C (customizated -40℃), <90%RH',
          storageTemperature: '–45°C ~ +75°C',
          protection: 'IP66',
          reliability: 'TVS 6000V lightning protection, surge protection, voltage transient protection',
          size: '720mmx388mmx550mm',
          weight: '＜50Kg'
        }
      },
    }
  },
];
