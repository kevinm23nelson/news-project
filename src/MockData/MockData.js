const mockNews = [
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "CNBC",
        "title": "Stocks close higher Friday as market comeback lifts S&P 500 to best week of 2024: Live updates - CNBC",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNV3Vnc2MtVmFUanNRNVdTUmluamdFSDRSQWlILUJXMTA5U0xKMm8xN25GM2xhdDgwaS1PV2JuMExTODZaLVV0elVab1FYWXNESlNqdEpZSEdDdUsxM1VLbjdtQkxpdWw4Si1TemI1MTN2YXc0c3pOdFEwM2NWc2FuSzUtNXZJS1kzS0owQkw3VkJNdEZTY2VfNnVaZlVfVF96UmU4TTVIV1JmMm5oZHfSAbMBQVVfeXFMTzdvUWU0aFlmemp2SG1xZ21qX3I1a1NONlBRQkhtVzNYU0pjVVdITkpIeGtrQVNJdmw0RU9rT09WTFZ0anpTbUhaVUtTM3VMOW9EQ3ZycUg2a1ROZ0pRVHRRZWk4WlB4cXgtN3A5NTY5LXNGbHVqT3NMd3FZcFpCSy1hWkZGYVpFdWhiVk9iT0FOdWxQOWZvU1pRQTF6emNlR2I0RThFRVR6eVo1YjEyekVockU?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T20:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Deadline",
        "title": "NY Judge Rules In Fubo's Favor In Suit Against Disney, Fox And WBD In Sports Antitrust Case - Deadline",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQY1lOOUF4SmduTjA2dGs1RlF2UVFDUjNYb0hlTU5qNnJzSTR0b1dNSkE0WWZaaGVMZ25jb0VqZ1dGVWRiZzdFS1hNa0FmUkN3UHBjWTFuQVFvWDJERkM0TXByaWhnd1NNODgySHNqM0FQU1BNS19yTzMzM2pETEcyR1N6MlA1ZzRoaVRpX0xyeW1yeTJrQmd5SXY5WEVJb2JieWJkT29seHdBZzBPWk43WXlhb3J6cFFXWGc?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T19:52:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Fox Business",
        "title": "Trader Joe's recalls 653,000 mango tangerine scented candles - Fox Business",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaEExWU9IamFMZHVCVEprQk9VVW5tX3Bqby1hUU90OTZYa0JQdV9sT3ZWbDRzWXhDdlc3Qno0VmlZTzBuTVdhWDI1S3E2SE11aXA1VUJ3TUJVTGttUWw1VkFfZGZib09XYkdrSl9aN1dENUNHNVNZUXAtbjRvXzRsbU9jNGhBcm9XbElsUTNlSVFSS3JYRzRFdl82S0XSAaIBQVVfeXFMUDM5U0I1NVh6TE8tdThwUklUMmFJc2RtQ19ZRnNRTS1jYngzMDY4MTd1MTByUnRDWmhCeE1nQURTT0hhY1hTT2dYeno3WTROdlhiWVc5YkFLZFNUbzUwM2p6dkZHM3JreER3ZktXSE9NYlc0a0lYTnBMMEtLZWoyNjNRLXpQSl9TSlBCUEMzdGx6b1VDa0x2MHVPd2ZFMmFGRE9R?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T19:36:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "SFGATE",
        "title": "Bay Area startup lays off 75% of employees after ‘earthquake’ of FDA rejection - SFGATE",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNc0ZtWFlrQ3RKbHpKS21oYVJZaTVKaHd2ZWh2Ym9WWWpzcUhWbEU0NkFBcENLY0tPOWJJd3FiMWlIQzhfVUNVT1hzbWw0MDlnX0NGem5XVWNveTRSV2QtZ1lzS251LTV0ZWZrbHpxLWNaNVpFU1B4LW9OMHJRWm84emlBdw?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T19:15:25Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Fox Business",
        "title": "Housing market changes are coming: How buyers, sellers could be affected - Fox Business",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQWFZLZklib2VuWnpLV200aGRCVUM5TWJSUHBxQjlKNWdVWF9wamUzVnBYMUxuVFlIRHdXVklGY3VTa1RRNkotcFVBMDkwc3FFMi1CTVF6cHF0YzlOOHVtckxZbDdROUxZT2psS1FRd0pEZzdudlI2WVdBb3Rkc002cjFrUl9WaVdpeGk0T0IyR2hzZHdzd2hVTFZaaElsbXpEaUow0gGoAUFVX3lxTE5OVXJyYjJnWkVuY2xsR3ZWZFA4eUxVNkRYRjhOdkgwUGlXeGNpTTc0eUhjR0lIeGpVUHkxbmZPSjJxMFRvb0I2T0tpMlUxZ0dNUFpsSTVLZFYyakVlTldtMkVBQlVsTE11d0I2SVB0ckx6cXRVWjFhbWdVZnk4Q0ZmZUYybUkzMFZvMkFSQ3Ytc3BzQUcyTGF3TVJUc05tOGVqbG9jVDRXMQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T18:57:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo! Voices",
        "title": "Delta says it's reviewing how man boarded wrong flight. A family says he was following them - Yahoo! Voices",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9YdVVGQVZwVXhsWE9EZkdKWXhuNWlhVzNTV1pHRlZKSVMwRFVkNWhDWFp5ZDByZzJFUGJLaFpSOElFNFVKaDFCamdSMjBJZ25VckY3dEpTcHdMMjVFQUh2TThOMUVTVFRQY0dlc1ZSOUZ1ZWZrczYxNUwtM1NZZVE?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T18:49:10Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "WCVB Boston",
        "title": "Deals reached to save five Steward Health hospitals, gov. says - WCVB Boston",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPYTUzZmxhUlJicDlkLUhqbmVIdW1tTWN3QXA1dEY4SWMtZm1jU3JtWWR5V1pzQmRnY01kMFdxQURhVW5ySDNxNC1ZelBpV1FneVN3QUJRczJjU0hLRjY5U091NnlTYXRiMm5sRGRORWxFcU9wb1JMNVdVSVV5RHMzenctMlpIUWVCTXc?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T18:33:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "WIRED",
        "title": "The Slow-Burn Nightmare of the National Public Data Breach - WIRED",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1CR281emtMYy1ibWJrSUF3MDhHcWpzemd6VHdhcTRwSjV6Z1hvUHFObUt4UDNOOFVOWW1GYUR2ZV9JU2xtRkxGSjhPZDZMamg0VlVEVTk2MVhsemppalk1cHAzVDQyQmtYWlY1bzNn?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T18:31:13Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Bloomberg",
        "title": "Powell Huddles With Bank CEOs to Avoid Long Legal Fight Over Capital Plan - Bloomberg",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPTzZjbVVMMmh4My1mNzFrWWhsdkdTd0lHbVdmeHAxR2t5QS1LMmVuYzBFa2Q3bGVuMlo4N0tiVzRROHBRdGRhUVdfU1FMOFJHeU1EbU1HTFAxYlU4VjJRTFMydU9UWkJWR1p3bXhxNTJ1bnAyQjZMQVFnS1A3Wl9pc3FIVmpGNHV6VmJ1WU9fSklXNHNtVGktZmlsZENvLWRlZzRVQXlsbi1ZVF9GSWt4MjY2ZDVCd0I5Zmx5azFoWWZFQQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:55:42Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "KTLA Los Angeles",
        "title": "Newsom’s new proposal seeks to prevent future fuel shortages and price hikes in California - KTLA Los Angeles",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNaHJGQVhFNGtXMmtFM2ZaRHMwaV9PSVdaM09HMERUZVByMDN2RGhhNlVQdVNWbFFoS1RYbUh3NllZd1ZMY0w5RHZadWg2QTd1Y3NPMlhkYXk0eUVZanR4dkl5bnBjN0pncFdVbnA0OUt0Z2pyWXRuUFlzMy1IRmZYMVlpNUJyNU8wTDh0QlZBOTVaeFViWlBZa1NScGp4NW43cWx0OTZraUN1RnV2a2k1RlBpelZzV0VsV2kxUmg4LUfSAcYBQVVfeXFMT210eUNiNnFWdWlkUGZmdmI1Y1pqaVBlMzhnVkJHMkVQWlY2M0lsWl9aSUM0NVpUdndhNHJNVFdPbXA2andWMC1ISVo3WjBGNDVVVjBhekNIdF90cUtVREVxRi05N0V2N09KcnJYczJNQXFyZk01UE9qMklQSFg1aXhYZGctZVd3QVh3Zk9NSkFkX1JYVXZTbGJaeUN3MHB4OG1kdWZMejJXQW9lXzZnZlBmUS10S29CdkNndmtLak92UU5zXzB3?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:50:52Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Wall Street Journal",
        "title": "Housing Starts Slide to Four-Year Low as Mortgage Rates Bite - The Wall Street Journal",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxQV21RNGZPUmF2RDZ0bXNnMV84SEl1MkZlUC10MmhUYXFQZWFWMHcwb0RlNTNLYlBFRmVlVHBNYkUzM3k4S2JneEdveFZ3ZUsyZGRCa0xLc1I4a0t6M3pJb2xQRVNUaXY3WlhaMkdZWU81MXBINTZMSGU5cHJsdkxoZTE0eHVFUndxRlhPdzZvVzB5a2xIcER3VkRxLVpxN01nN1E2eXJpSHhnQl9hM1g1SUwxN2tBQjlBMldfZERVSVQ2QlpZVmdRUjJkZHZYVEZDLTBYZjRXTzB1Y2FTdExZbnRIRHIwcnFvVUVoMDJ3ZFJiajA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:43:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "Nvidia’s earnings could turn around the ailing AI trade - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPRU1IbkFLNXRXb1RYMUZDRkdoczRWSUNnZmxxVUk1aDQ3TzVoY2dtOEFCSklQNXJ4YlRRcTZlaGs4a28zTFN0a004cFZEcVdpTGN3MVR4YXpQUVA1dlNkSlhudlV0OU1kTnhVNENQNVpWU0JfVTdVOFRhU2ZVWWp0TlROR0Q3YkJMSVRjQ2JJdXJYQklNQlBKY1puMkowdkUyRUE?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:35:54Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Top Gear",
        "title": "The new 2,078bhp Rimac Nevera R will do 0-186mph in 8.66s - Top Gear",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPUVd6RmptOGRtUC1jUDhRMHZNbnppX2owdUtyeFBhV1dzUFY3aHluRU04YUdTb2lNZl9RQ1BEWlRHRndnNUZsVzJHTlhQUjJ2ZHFwQTFMb1c0d2hPdVJhajlPWC1SS0tLTWZ6a3JYTEJ1VVgyalBJbDVTNGV6NkZwZkRsV3hmT2cyRGRhZHAwRXNBallF?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:30:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Fox Business",
        "title": "Incoming Starbucks CEO Brian Niccol poised to get sizable compensation - Fox Business",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNQ0RtX3Nrc1V1OGoxSkdsZG5uN0c5RXBQSU9HOGIxcmZfMzRIa0ljaDFOZjBqQTlwZEh6LTVadzllX3BhRXM0Z2ZnTE5DaDVZVGxGWVc4TWVqaVQ2T0ExVElDY0R2Q29oUUxUR1RmT2xucXlPdW1KME5DMllBWG9Ud3NFLVQtZ1lZLWVOMFVrWWNNZHdaYVZndGg2Z3hMcmdyWGg3YS1n0gGrAUFVX3lxTFBBNi1tNTVLeWVjaFlpNm5YMXVzZUNXWS1aWENXZTd2dHRCdGJfZE4xNDZOb2ljVnc1c19mWXFPZEUyTDVrLUlJOUxVS1ZYeF9GZ21LZkx5NlFMLVdzSy1qQjRUTmhkU25qdDRwTGNNdzdQRFg1dEl4UVlscUtoXy1JdS1tY3FlTlNYVkN6LVhCRENkcWhUVmdXbzZiTkYxRThLSHlZWHRFR2ZWUQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:08:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Fox News",
        "title": "New FTC decision could 'inject' DEI into business practices nationwide, GOP commissioner says - Fox News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPVno4TWVSTjAwTllCcVRFN0JTcFAwdjllSlRpS09WVm4zNC16VlpmY1IzeERJOGVuVUNyOHVHYnBydkJkdlZmS3BMQkRSOTlYbHgybWhKdmRlekx1SE9ueHd5T1N3bjIyX2VMM01QUzFtTHFoS2Y2Tm9OY2J3OWc3Qk5VZThNeEk2Q0pkTU9KUkpWc1RUWVNtWDhGenE4eXRSazZCSHl6Z28tN3AxRjVaenFQTDhpck1tc1HSAb8BQVVfeXFMTnQ3UXQ2Zzc3aUtaLXlfNUdyRFRMQVFVLThrak9VMVpvUFRhNXVEQnkzbTJhWVlkMUoxSi03YzBVMWxiczhSeDhwei1ucjcwSmdrZzZTdkVkelVDaktHZjBWa25oR1NZNElKcmQ3OUZJRVJEVS1hdkFDY0t4a1laS0p3NW96TlZyMldPSzlpU3Z6VlZRQ2N3WUE2VXRaUWVWWVlfd0RLV0hBOXlKV1Baa1g5UXltQzMzQWJ2QjQ4b1U?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T17:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "New York Post ",
        "title": "Most US states’ cucumbers recalled after hundreds get salmonella - New York Post ",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPTVI5Q01LNUFSVWNlUlBCS1lRTElJRHBzcjIzbzgwNlU5Y1RQZ29tUjdwWExGVmVDTkt0RHZlbnUtTmNGRWoxc3FLTzRMel9tSVMwUHRXbkVSMmVoX3dDVXFiMUMyLWt0QWhEMjJodmg4MWczbUdLN0JSOTZ6bEI1bGJRZVBpZHVaVWgycTJ5N1pUcEc3ZDlzQldZajZJUFNzdE5OOA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T15:45:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "Applied Materials stock slips despite Q3 earnings, revenue beat - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPRkdOVHY3d3Iwdnphc3hiVXpacV9wZk5rWWxYWFI3WG9ySFJ5MElTbXE1cTc2czFnVUtYTWtrX25IMWpkYU9jTDNoOVpSUEtWNXV3a21zV0wwNEdIenhFZGd0dnJPLUEyN3k3WnBFMEs3SHBpSE4yZlB2VGpfLWU2T3F0U0U0ZF9iaVZ0LQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T15:13:33Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "Jamie Dimon says the 'Buffett Rule' approach to taxing the wealthy could solve America's debt problem - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPT0JPZWZDZE5MUjF3SGZKZ1JlTEJDSGdDcEZuY2F3OXlVT3JCLUZnREwxV2Jtd04ySXhxNEV1MUdCUnF5ZER1cUIwQy04YldtWUVMalZVTkF6d2FPZXE5LVcxR2F1WHRyMWVrNDVWdnRPSjhOd0RXRWpoMTBxSjFiRg?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T15:09:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "Bayer's Roundup, Estée Lauder, H&R Block: Stocks In Focus - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBwdU5oVnNoT0FTX0sydktwaFNDTXRDRUs2TDNYbnR0SnE5UnUyV0xmblZsaExiZkRzcFoyeEJTX19KVW9JSmdGTmpsMXNBSl9JZXpNZXpGaHNMVS1XOXg1bTVmZEh0a1FEbjUyYk8xdkx3b2s1X3VwRm5nOFk2YWM?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T14:17:48Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Associated Press",
        "title": "US consumer sentiment rises slightly on Democratic optimism over Harris' presidential prospects - The Associated Press",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOSXZUeFJGV05YRnZPOFN0T2VJMTJScklaMXE0X29sTjN6bE5ybDBrNUhqckJOUHl4TU50UDZBLV9mR1RDNUplS1hRQ1ROT1EzbVdJRTFhNkFmYVcxU1k5akc4ODdvUXV1X3pkMTVYai1mTFllWUVJU09GOEx0Z21pd2YxS3E2YTdya0NoTkRXVHZDTmhUNl9ZWFBRQWItSWFKTFRfZmxoZE5JbmQ4ZS1DZVRMUEVndXVwdTRR?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-08-16T14:15:00Z",
        "content": null
    }
]

export default mockNews;