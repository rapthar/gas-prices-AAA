import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { supabase } from "@/integrations/supabase/client";
import { Fuel, MapPin, DollarSign, Clock, Key, Database } from 'lucide-react';

const STATE_URLS = [
  { state: 'AK', name: 'Alaska', url: 'https://gasprices.aaa.com/?state=AK' },
  { state: 'AL', name: 'Alabama', url: 'https://gasprices.aaa.com/?state=AL' },
  { state: 'AR', name: 'Arkansas', url: 'https://gasprices.aaa.com/?state=AR' },
  { state: 'AZ', name: 'Arizona', url: 'https://gasprices.aaa.com/?state=AZ' },
  { state: 'CA', name: 'California', url: 'https://gasprices.aaa.com/?state=CA' },
  { state: 'CO', name: 'Colorado', url: 'https://gasprices.aaa.com/?state=CO' },
  { state: 'CT', name: 'Connecticut', url: 'https://gasprices.aaa.com/?state=CT' },
  { state: 'DC', name: 'Washington DC', url: 'https://gasprices.aaa.com/?state=DC' },
  { state: 'DE', name: 'Delaware', url: 'https://gasprices.aaa.com/?state=DE' },
  { state: 'FL', name: 'Florida', url: 'https://gasprices.aaa.com/?state=FL' },
  { state: 'GA', name: 'Georgia', url: 'https://gasprices.aaa.com/?state=GA' },
  { state: 'HI', name: 'Hawaii', url: 'https://gasprices.aaa.com/?state=HI' },
  { state: 'IA', name: 'Iowa', url: 'https://gasprices.aaa.com/?state=IA' },
  { state: 'ID', name: 'Idaho', url: 'https://gasprices.aaa.com/?state=ID' },
  { state: 'IL', name: 'Illinois', url: 'https://gasprices.aaa.com/?state=IL' },
  { state: 'IN', name: 'Indiana', url: 'https://gasprices.aaa.com/?state=IN' },
  { state: 'KS', name: 'Kansas', url: 'https://gasprices.aaa.com/?state=KS' },
  { state: 'KY', name: 'Kentucky', url: 'https://gasprices.aaa.com/?state=KY' },
  { state: 'LA', name: 'Louisiana', url: 'https://gasprices.aaa.com/?state=LA' },
  { state: 'MA', name: 'Massachusetts', url: 'https://gasprices.aaa.com/?state=MA' },
  { state: 'MD', name: 'Maryland', url: 'https://gasprices.aaa.com/?state=MD' },
  { state: 'ME', name: 'Maine', url: 'https://gasprices.aaa.com/?state=ME' },
  { state: 'MI', name: 'Michigan', url: 'https://gasprices.aaa.com/?state=MI' },
  { state: 'MN', name: 'Minnesota', url: 'https://gasprices.aaa.com/?state=MN' },
  { state: 'MO', name: 'Missouri', url: 'https://gasprices.aaa.com/?state=MO' },
  { state: 'MS', name: 'Mississippi', url: 'https://gasprices.aaa.com/?state=MS' },
  { state: 'MT', name: 'Montana', url: 'https://gasprices.aaa.com/?state=MT' },
  { state: 'NC', name: 'North Carolina', url: 'https://gasprices.aaa.com/?state=NC' },
  { state: 'ND', name: 'North Dakota', url: 'https://gasprices.aaa.com/?state=ND' },
  { state: 'NE', name: 'Nebraska', url: 'https://gasprices.aaa.com/?state=NE' },
  { state: 'NH', name: 'New Hampshire', url: 'https://gasprices.aaa.com/?state=NH' },
  { state: 'NJ', name: 'New Jersey', url: 'https://gasprices.aaa.com/?state=NJ' },
  { state: 'NM', name: 'New Mexico', url: 'https://gasprices.aaa.com/?state=NM' },
  { state: 'NV', name: 'Nevada', url: 'https://gasprices.aaa.com/?state=NV' },
  { state: 'NY', name: 'New York', url: 'https://gasprices.aaa.com/?state=NY' },
  { state: 'OH', name: 'Ohio', url: 'https://gasprices.aaa.com/?state=OH' },
  { state: 'OK', name: 'Oklahoma', url: 'https://gasprices.aaa.com/?state=OK' },
  { state: 'OR', name: 'Oregon', url: 'https://gasprices.aaa.com/?state=OR' },
  { state: 'PA', name: 'Pennsylvania', url: 'https://gasprices.aaa.com/?state=PA' },
  { state: 'RI', name: 'Rhode Island', url: 'https://gasprices.aaa.com/?state=RI' },
  { state: 'SC', name: 'South Carolina', url: 'https://gasprices.aaa.com/?state=SC' },
  { state: 'SD', name: 'South Dakota', url: 'https://gasprices.aaa.com/?state=SD' },
  { state: 'TN', name: 'Tennessee', url: 'https://gasprices.aaa.com/?state=TN' },
  { state: 'TX', name: 'Texas', url: 'https://gasprices.aaa.com/?state=TX' },
  { state: 'UT', name: 'Utah', url: 'https://gasprices.aaa.com/?state=UT' },
  { state: 'VA', name: 'Virginia', url: 'https://gasprices.aaa.com/?state=VA' },
  { state: 'VT', name: 'Vermont', url: 'https://gasprices.aaa.com/?state=VT' },
  { state: 'WA', name: 'Washington', url: 'https://gasprices.aaa.com/?state=WA' },
  { state: 'WI', name: 'Wisconsin', url: 'https://gasprices.aaa.com/?state=WI' },
  { state: 'WV', name: 'West Virginia', url: 'https://gasprices.aaa.com/?state=WV' },
  { state: 'WY', name: 'Wyoming', url: 'https://gasprices.aaa.com/?state=WY' }
];

interface MetroPriceData {
  city: string;
  price: string;
  midPrice?: string;
  premiumPrice?: string;
  dieselPrice?: string;
  // Detailed time-based data
  currentAvg?: {
    regular?: string;
    mid?: string;
    premium?: string;
    diesel?: string;
  };
  yesterdayAvg?: {
    regular?: string;
    mid?: string;
    premium?: string;
    diesel?: string;
  };
  weekAgoAvg?: {
    regular?: string;
    mid?: string;
    premium?: string;
    diesel?: string;
  };
  monthAgoAvg?: {
    regular?: string;
    mid?: string;
    premium?: string;
    diesel?: string;
  };
  yearAgoAvg?: {
    regular?: string;
    mid?: string;
    premium?: string;
    diesel?: string;
  };
  [key: string]: any; // Add index signature for Json compatibility
}

interface ScrapedData {
  url: string;
  state: string;
  name: string;
  regular?: string | null;
  midgrade?: string | null;
  premium?: string | null;
  diesel?: string | null;
  metros: MetroPriceData[];
  data: any;
}

export const GasPriceScraper = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [apiKeySet, setApiKeySet] = useState(!!FirecrawlService.getApiKey());
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapedData, setScrapedData] = useState<ScrapedData[]>([]);
  const [currentState, setCurrentState] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState({ remaining: 10, timeUntilReset: 0 });

  // Update rate limit info
  const updateRateLimitInfo = () => {
    const info = FirecrawlService.getRateLimitInfo();
    setRateLimitInfo(info);
  };

  // Update rate limit info on mount and when API key is set
  useEffect(() => {
    updateRateLimitInfo();
  }, [apiKeySet]);

  // Update rate limit info every second when scraping
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(updateRateLimitInfo, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    FirecrawlService.saveApiKey(apiKey);
    setApiKeySet(true);
    toast({
      title: "Success",
      description: "API key saved successfully",
    });
  };

  // Test function using AAA format data
  const handleTestAAAFormat = async () => {
    setIsLoading(true);
    try {
      console.log('Testing with actual AAA Alaska data...');
      const actualAlaskaData = `# Alaska average gas prices

|  | Regular | Mid-Grade | Premium | Diesel |
| --- | --- | --- | --- | --- |
| Current Avg. | $3.762 | $3.996 | $4.236 | $4.053 |
| Yesterday Avg. | $3.775 | $3.997 | $4.228 | $4.055 |
| Week Ago Avg. | $3.750 | $3.959 | $4.195 | $4.008 |
| Month Ago Avg. | $3.746 | $3.937 | $4.203 | $3.909 |
| Year Ago Avg. | $3.805 | $4.001 | $4.220 | $3.793 |

## Alaska metro average prices

### Anchorage

|  | Regular | Mid | Premium | Diesel |
| --- | --- | --- | --- | --- |
| Current Avg. | $3.707 | $3.995 | $4.261 | $4.017 |
| Yesterday Avg. | $3.713 | $4.023 | $4.266 | $4.026 |
| Week Ago Avg. | $3.681 | $3.952 | $4.207 | $3.983 |
| Month Ago Avg. | $3.663 | $3.927 | $4.207 | $3.863 |
| Year Ago Avg. | $3.730 | $4.058 | $4.260 | $3.724 |

### Fairbanks

|  | Regular | Mid | Premium | Diesel |
| --- | --- | --- | --- | --- |
| Current Avg. | $3.797 | $4.096 | $4.328 | $4.156 |
| Yesterday Avg. | $3.813 | $4.031 | $4.331 | $4.124 |
| Week Ago Avg. | $3.793 | $4.090 | $4.305 | $4.135 |
| Month Ago Avg. | $3.813 | $4.032 | $4.341 | $3.944 |
| Year Ago Avg. | $3.604 | $3.807 | $3.980 | $3.903 |

### Juneau

|  | Regular | Mid | Premium | Diesel |
| --- | --- | --- | --- | --- |
| Current Avg. | $3.573 | $3.722 | $3.903 | $4.339 |
| Yesterday Avg. | $3.751 | $3.694 | $3.803 | $4.267 |
| Week Ago Avg. | $3.751 | $3.697 | $3.862 | $4.252 |
| Month Ago Avg. | $3.698 | $3.656 | $3.770 | $4.060 |
| Year Ago Avg. | $4.053 | $3.965 | $4.176 | $3.843 |`;
      
      const extractedData = extractGasPriceData(actualAlaskaData, 'AK');
      console.log('Extracted data from actual AAA format:', extractedData);
      
      setScrapedData([{
        url: 'https://gasprices.aaa.com/?state=AK',
        state: 'AK',
        name: 'Alaska',
        data: extractedData,
        ...extractedData
      }]);
      
      toast({
        title: "AAA Format Test Complete",
        description: `Successfully extracted data using AAA format. Found ${extractedData.metros.length} metro areas.`,
      });
    } catch (error) {
      console.error('Error testing AAA format:', error);
      toast({
        title: "Test Error",
        description: "Error testing AAA format extraction",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to scrape a single state and show the raw markdown
  const handleTestSingleState = async () => {
    setIsLoading(true);
    try {
      console.log('Testing single state scraping...');
      
      // Test with DC to check metro extraction
      const stateInfo = STATE_URLS.find(s => s.state === 'DC') || STATE_URLS[0]; // DC or Alaska
      console.log(`Scraping ${stateInfo.name} (${stateInfo.state})...`);
      
      const result = await FirecrawlService.scrapeUrl(stateInfo.url);
      
      if (result.success && result.data) {
        const markdown = result.data.data?.markdown || result.data.markdown || '';
        console.log('Raw markdown from AAA:', markdown);
        
        const extractedData = extractGasPriceData(markdown, stateInfo.state);
        console.log('Extracted data:', extractedData);
        
        setScrapedData([{
          url: stateInfo.url,
          state: stateInfo.state,
          name: stateInfo.name,
          data: result.data,
          ...extractedData
        }]);
        
        toast({
          title: "Single State Test Complete",
          description: `Successfully scraped ${stateInfo.name}. Check console for raw markdown.`,
        });
      } else {
        console.error('Failed to scrape:', result.error);
        toast({
          title: "Test Error",
          description: "Failed to scrape single state",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error testing single state:', error);
      toast({
        title: "Test Error",
        description: "Error testing single state scraping",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Test function specifically for RI
  const handleTestRI = async () => {
    setIsLoading(true);
    try {
      console.log('Testing RI state scraping...');
      
      const stateInfo = STATE_URLS.find(s => s.state === 'RI');
      console.log(`Scraping ${stateInfo?.name} (${stateInfo?.state})...`);
      
      if (!stateInfo) {
        throw new Error('RI state not found');
      }
      
      const result = await FirecrawlService.scrapeUrl(stateInfo.url);
      
      if (result.success && result.data) {
        const markdown = result.data.data?.markdown || result.data.markdown || '';
        console.log('Raw markdown from AAA for RI:', markdown);
        
        const extractedData = extractGasPriceData(markdown, stateInfo.state);
        console.log('Extracted data for RI:', extractedData);
        
        setScrapedData([{
          url: stateInfo.url,
          state: stateInfo.state,
          name: stateInfo.name,
          data: result.data,
          ...extractedData
        }]);
        
        toast({
          title: "RI Test Complete",
          description: `Successfully scraped ${stateInfo.name}. Check console for results.`,
        });
      } else {
        console.error('Failed to scrape RI:', result.error);
        toast({
          title: "Test Error",
          description: "Failed to scrape RI",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error testing RI:', error);
      toast({
        title: "Test Error",
        description: "Error testing RI scraping",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Test function to scrape all states with correct AAA format
  const handleTestAllStates = async () => {
    setIsLoading(true);
    setProgress(0);
    setScrapedData([]);
    
    try {
      console.log('Testing scraping for all states with correct AAA format...');
      const results = [];
      const totalStates = STATE_URLS.length;
      
      for (let i = 0; i < totalStates; i++) {
        const stateInfo = STATE_URLS[i];
        setCurrentState(stateInfo.name);
        
        console.log(`Scraping ${stateInfo.name} (${stateInfo.state})...`);
        
        // Add timeout to prevent unresponsive page
        const timeoutPromise = new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 30000)
        );
        
        let result = await Promise.race([
          FirecrawlService.scrapeUrl(stateInfo.url),
          timeoutPromise
        ]) as any;
        let retryCount = 0;
        const maxRetries = 2;
        
        // Retry logic for failed scrapes
        while (!result.success && retryCount < maxRetries) {
          console.warn(`Retry ${retryCount + 1} for ${stateInfo.name}:`, result.error);
          retryCount++;
          await new Promise(resolve => setTimeout(resolve, 2000));
          result = await Promise.race([
            FirecrawlService.scrapeUrl(stateInfo.url),
            timeoutPromise
          ]);
        }
        
        if (result.success && result.data) {
          const markdown = result.data.data?.markdown || result.data.markdown || '';
          console.log(`Processing markdown for ${stateInfo.name}, length: ${markdown.length}`);
          
          try {
            const extractedData = extractGasPriceData(markdown, stateInfo.state);
            
            // Validate that we extracted at least some data
            const hasData = extractedData.regular || extractedData.midgrade || 
                           extractedData.premium || extractedData.diesel || 
                           extractedData.metros.length > 0;
            
            if (hasData) {
              results.push({
                url: stateInfo.url,
                state: stateInfo.state,
                name: stateInfo.name,
                data: result.data,
                ...extractedData
              });
              console.log(`✅ Successfully extracted data for ${stateInfo.name}:`, extractedData);
            } else {
              console.warn(`⚠️ No data extracted for ${stateInfo.name}`);
              results.push({
                url: stateInfo.url,
                state: stateInfo.state,
                name: stateInfo.name,
                regular: null,
                midgrade: null,
                premium: null,
                diesel: null,
                metros: [],
                data: null
              });
            }
          } catch (extractError) {
            console.error(`❌ Error extracting data for ${stateInfo.name}:`, extractError);
            results.push({
              url: stateInfo.url,
              state: stateInfo.state,
              name: stateInfo.name,
              regular: null,
              midgrade: null,
              premium: null,
              diesel: null,
              metros: [],
              data: null
            });
          }
        } else {
          console.error(`❌ Failed to scrape ${stateInfo.name}:`, result.error);
          results.push({
            url: stateInfo.url,
            state: stateInfo.state,
            name: stateInfo.name,
            regular: null,
            midgrade: null,
            premium: null,
            diesel: null,
            metros: [],
            data: null
          });
        }
        
        setProgress(((i + 1) / totalStates) * 100);
      }
      
      setScrapedData(results);
      setCurrentState('');
      
      const successfulStates = results.filter(r => r.regular || r.midgrade || r.premium || r.diesel || r.metros.length > 0).length;
      const totalMetros = results.reduce((sum, r) => sum + r.metros.length, 0);
      
      toast({
        title: "All States Test Complete",
        description: `Successfully scraped ${successfulStates}/${totalStates} states with ${totalMetros} total metro areas.`,
      });
      
      console.log('Final results:', results);
    } catch (error) {
      console.error('Error testing all states:', error);
      toast({
        title: "Test Error",
        description: "Error testing all states scraping",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  // Function to extract detailed time-based pricing data from markdown tables
  const extractDetailedMetroData = (tableBody: string, city: string): MetroPriceData | null => {
    // Check if this is a summary section that should be skipped
    const invalidCityPatterns = [
      /highest\s+recorded\s+average\s+price/i,
      /state\s+summary/i,
      /overview/i,
      /summary/i,
      /highest/i,
      /recorded/i,
      /average\s+price/i
    ];
    
    const isInvalidCity = invalidCityPatterns.some(pattern => pattern.test(city));
    if (isInvalidCity) {
      console.log('Skipping invalid city/summary section:', city);
      return null;
    }
    
    const rows = tableBody.split('\n').map(r => r.trim()).filter(Boolean);
    const metroData: MetroPriceData = {
      city,
      price: '',
      midPrice: '',
      premiumPrice: '',
      dieselPrice: '',
      currentAvg: {},
      yesterdayAvg: {},
      weekAgoAvg: {},
      monthAgoAvg: {},
      yearAgoAvg: {}
    };
    
    console.log('Extracting detailed data for city:', city);
    console.log('Table body rows:', rows.length);
    console.log('Table body content:', tableBody);
    
    // Parse each row to extract time-based data
    for (const row of rows) {
      const cols = row.split('|').map(c => c.trim());
      console.log('Processing row:', cols);
      
      if (cols.length < 5) {
        console.log('Skipping row with insufficient columns:', cols.length);
        continue;
      }
      
      const timeFrame = cols[0].toLowerCase();
      const regular = cols[1];
      const mid = cols[2];
      const premium = cols[3];
      const diesel = cols[4];
      
      console.log('Extracted from row:', { timeFrame, regular, mid, premium, diesel });
      
      // Map time frames to our data structure
      if (timeFrame.includes('current') && timeFrame.includes('avg')) {
        metroData.currentAvg = { regular, mid, premium, diesel };
        metroData.price = regular; // Use current regular as primary price
        metroData.midPrice = mid;
        metroData.premiumPrice = premium;
        metroData.dieselPrice = diesel;
        console.log('Set current avg data:', metroData.currentAvg);
      } else if (timeFrame.includes('yesterday') && timeFrame.includes('avg')) {
        metroData.yesterdayAvg = { regular, mid, premium, diesel };
        console.log('Set yesterday avg data:', metroData.yesterdayAvg);
      } else if (timeFrame.includes('week') && timeFrame.includes('ago') && timeFrame.includes('avg')) {
        metroData.weekAgoAvg = { regular, mid, premium, diesel };
        console.log('Set week ago avg data:', metroData.weekAgoAvg);
      } else if (timeFrame.includes('month') && timeFrame.includes('ago') && timeFrame.includes('avg')) {
        metroData.monthAgoAvg = { regular, mid, premium, diesel };
        console.log('Set month ago avg data:', metroData.monthAgoAvg);
      } else if (timeFrame.includes('year') && timeFrame.includes('ago') && timeFrame.includes('avg')) {
        metroData.yearAgoAvg = { regular, mid, premium, diesel };
        console.log('Set year ago avg data:', metroData.yearAgoAvg);
      }
    }
    
    // If we didn't find any data, try alternative extraction methods
    if (!metroData.price && Object.keys(metroData.currentAvg).length === 0) {
      console.log('No data found with standard parsing, trying alternative methods...');
      
      // Look for price patterns in the table body
      const pricePatterns = [
        /\$(\d+\.\d+)/g,
        /(\d+\.\d+)/g
      ];
      
      for (const pattern of pricePatterns) {
        const matches = tableBody.match(pattern);
        if (matches && matches.length >= 4) {
          console.log('Found price matches:', matches);
          metroData.price = `$${matches[0]}`;
          metroData.midPrice = `$${matches[1] || matches[0]}`;
          metroData.premiumPrice = `$${matches[2] || matches[0]}`;
          metroData.dieselPrice = `$${matches[3] || matches[0]}`;
          metroData.currentAvg = {
            regular: `$${matches[0]}`,
            mid: `$${matches[1] || matches[0]}`,
            premium: `$${matches[2] || matches[0]}`,
            diesel: `$${matches[3] || matches[0]}`
          };
          break;
        }
      }
    }
    
    console.log('Final metro data for', city, ':', metroData);
    return metroData;
  };



  function extractGasPriceData(markdown: string, state: string): ScrapedData {
    try {
      console.log('Extracting data for state:', state, 'from markdown length:', markdown.length);
      
      // Add a safety check to prevent infinite loops
      const startTime = Date.now();
      const maxProcessingTime = 10000; // 10 seconds max
      
      // Initialize the result structure
      const result: ScrapedData = {
        url: '',
        state,
        name: state,
        regular: null,
        midgrade: null,
        premium: null,
        diesel: null,
        metros: [],
        data: {}
      };

      // Extract state-level data from the main table
      const stateTableRegex = /\|\s*\|\s*Regular\s*\|\s*Mid-?Grade\s*\|\s*Premium\s*\|\s*Diesel\s*\|[\s\S]*?Current\s+Avg\.[\s\S]*?\$(\d+\.\d+)[\s\S]*?\$(\d+\.\d+)[\s\S]*?\$(\d+\.\d+)[\s\S]*?\$(\d+\.\d+)/i;
      const stateTableMatch = markdown.match(stateTableRegex);
      
      if (stateTableMatch) {
        console.log('Found state-level table data:', stateTableMatch);
        result.regular = `$${stateTableMatch[1]}`;
        result.midgrade = `$${stateTableMatch[2]}`;
        result.premium = `$${stateTableMatch[3]}`;
        result.diesel = `$${stateTableMatch[4]}`;
      }

      // Extract metro area data
      // Look for patterns like "### CityName" followed by tables
      // Updated to handle parentheses, hyphens, and other special characters in metro names
      const metroSectionRegex = /###\s+([A-Za-z\s\-\(\)]+)\s*\n([\s\S]*?)(?=###|$)/g;
      let metroMatch;
      let metroCount = 0;
      const maxMetros = 50; // Prevent infinite loops
      
      while ((metroMatch = metroSectionRegex.exec(markdown)) !== null) {
        // Safety check to prevent infinite loops
        if (Date.now() - startTime > maxProcessingTime) {
          console.warn('Processing timeout reached for', state);
          break;
        }
        
        metroCount++;
        if (metroCount > maxMetros) {
          console.warn('Too many metros found for', state, '- stopping at', maxMetros);
          break;
        }
        const cityName = metroMatch[1].trim();
        const metroContent = metroMatch[2];
        
        console.log('Processing metro area:', cityName);
        console.log('Metro content:', metroContent.substring(0, 200));
        
        // Skip if this looks like a summary section rather than a city
        const invalidCityPatterns = [
          /highest\s+recorded\s+average\s+price/i,
          /state\s+summary/i,
          /overview/i,
          /summary/i,
          /highest/i,
          /recorded/i,
          /average\s+price/i,
          /price\s+summary/i
        ];
        
        const isInvalidCity = invalidCityPatterns.some(pattern => pattern.test(cityName));
        if (isInvalidCity || 
            cityName.toLowerCase().includes('highest') || 
            cityName.toLowerCase().includes('recorded') ||
            cityName.toLowerCase().includes('average') ||
            cityName.toLowerCase().includes('price') ||
            cityName.toLowerCase().includes('summary') ||
            cityName.toLowerCase().includes('overview')) {
          console.log('Skipping summary section:', cityName);
          continue;
        }
        
        // Extract detailed metro data
        const metroData = extractDetailedMetroData(metroContent, cityName);
        
        if (metroData && metroData.city && (metroData.price || Object.keys(metroData.currentAvg || {}).length > 0)) {
          result.metros.push(metroData);
          console.log('Added metro data for:', cityName, metroData);
        }
      }

      // If no metros found with the ### pattern, try alternative patterns
      if (result.metros.length === 0) {
        console.log('No metros found with ### pattern, trying alternative extraction...');
        
        // Look for city names in table headers or content
        const cityPatterns = [
          /###\s+([A-Za-z\s]+)/g,
          /\|\s*([A-Za-z\s]+)\s*\|\s*\$(\d+\.\d+)/g,
          /##\s+([A-Za-z\s]+)\s+metro\s+average\s+prices/i
        ];
        
        // Additional patterns to avoid
        const invalidPatterns = [
          /highest\s+recorded\s+average\s+price/i,
          /state\s+summary/i,
          /overview/i,
          /summary/i,
          /highest/i,
          /recorded/i,
          /average\s+price/i
        ];
        
        for (const pattern of cityPatterns) {
          let match;
          let patternCount = 0;
          const maxPatternMatches = 100; // Prevent infinite loops
          
          while ((match = pattern.exec(markdown)) !== null) {
            // Safety check to prevent infinite loops
            if (Date.now() - startTime > maxProcessingTime) {
              console.warn('Processing timeout reached for', state);
              break;
            }
            
            patternCount++;
            if (patternCount > maxPatternMatches) {
              console.warn('Too many pattern matches for', state, '- stopping at', maxPatternMatches);
              break;
            }
            const cityName = match[1].trim();
            
            // Skip if it's not a valid city name
            if (cityName.length < 3 || cityName.length > 100 || 
                /^(Regular|Mid|Premium|Diesel|Current|Yesterday|Week|Month|Year|Avg|Average|Alaska|average|gas|prices|New York|Columbia|National|State|Today|Yesterday|Week Ago|Month Ago|Year Ago|Current Avg|Yesterday Avg|Week Ago Avg|Month Ago Avg|Year Ago Avg)$/i.test(cityName)) {
              continue;
            }
            
            // Check if we already have this city
            if (!result.metros.some(m => m.city.toLowerCase() === cityName.toLowerCase())) {
              // Check if this section contains invalid patterns
              const sectionContent = markdown.substring(match.index, match.index + 500);
              const hasInvalidPattern = invalidPatterns.some(pattern => pattern.test(sectionContent));
              
              if (!hasInvalidPattern) {
                // Try to extract data for this city
                const cityData = extractCityDataFromMarkdown(markdown, cityName);
                if (cityData) {
                  result.metros.push(cityData);
                }
              } else {
                console.log('Skipping section with invalid pattern:', cityName);
              }
            }
          }
        }
      }

      // If still no metros found, try to extract from the entire markdown
      if (result.metros.length === 0) {
        console.log('Still no metros found, trying to extract from entire markdown...');
        
        // Look for table patterns that might contain city data
        const tableRegex = /\|\s*([A-Za-z\s]+)\s*\|\s*\$(\d+\.\d+)\s*\|\s*\$(\d+\.\d+)\s*\|\s*\$(\d+\.\d+)\s*\|\s*\$(\d+\.\d+)\s*\|/g;
        let tableMatch;
        let tableCount = 0;
        const maxTableMatches = 100; // Prevent infinite loops
        
        while ((tableMatch = tableRegex.exec(markdown)) !== null) {
          // Safety check to prevent infinite loops
          if (Date.now() - startTime > maxProcessingTime) {
            console.warn('Processing timeout reached for', state);
            break;
          }
          
          tableCount++;
          if (tableCount > maxTableMatches) {
            console.warn('Too many table matches for', state, '- stopping at', maxTableMatches);
            break;
          }
          const cityName = tableMatch[1].trim();
          
          // Skip if it's not a valid city name or is a common invalid name
          if (cityName.length < 3 || cityName.length > 100 || 
              /^(Regular|Mid|Premium|Diesel|Current|Yesterday|Week|Month|Year|Avg|Average|New York|Columbia|National|State|Today|Yesterday|Week Ago|Month Ago|Year Ago|Current Avg|Yesterday Avg|Week Ago Avg|Month Ago Avg|Year Ago Avg|Highest|Recorded|Price|Summary|Overview)$/i.test(cityName) ||
              cityName.toLowerCase().includes('highest recorded') ||
              cityName.toLowerCase().includes('average price') ||
              cityName.toLowerCase().includes('state summary')) {
            continue;
          }
          
          // Additional validation: skip if it looks like a header or summary row
          if (cityName.toLowerCase().includes('avg') || 
              cityName.toLowerCase().includes('average') ||
              cityName.toLowerCase().includes('current') ||
              cityName.toLowerCase().includes('yesterday') ||
              cityName.toLowerCase().includes('week') ||
              cityName.toLowerCase().includes('month') ||
              cityName.toLowerCase().includes('year')) {
            continue;
          }
          
          // Check if we already have this city
          if (!result.metros.some(m => m.city.toLowerCase() === cityName.toLowerCase())) {
            const metroData: MetroPriceData = {
              city: cityName,
              price: `$${tableMatch[2]}`,
              midPrice: `$${tableMatch[3]}`,
              premiumPrice: `$${tableMatch[4]}`,
              dieselPrice: `$${tableMatch[5]}`,
              currentAvg: {
                regular: `$${tableMatch[2]}`,
                mid: `$${tableMatch[3]}`,
                premium: `$${tableMatch[4]}`,
                diesel: `$${tableMatch[5]}`
              }
            };
            
            result.metros.push(metroData);
            console.log('Added metro data from table pattern:', cityName, metroData);
          }
        }
      }

      // Filter out invalid metros that appear across multiple states
      const invalidMetroNames = [
        'New York', 'Columbia', 'National', 'State',
        'Today', 'Yesterday', 'Week Ago', 'Month Ago', 'Year Ago',
        'Current Avg', 'Yesterday Avg', 'Week Ago Avg', 'Month Ago Avg', 'Year Ago Avg',
        'Highest', 'Recorded', 'Average', 'Price', 'Summary', 'Overview',
        'Highest Recorded Average Price', 'State Summary', 'Price Summary'
      ];
      
      result.metros = result.metros.filter(metro => {
        const isValid = !invalidMetroNames.some(invalid => 
          metro.city.toLowerCase().includes(invalid.toLowerCase())
        );
        
        if (!isValid) {
          console.log('Filtered out invalid metro:', metro.city);
        }
        
        return isValid;
      });
      
      const processingTime = Date.now() - startTime;
      console.log('Final extracted data for', state, ':', result, `(processed in ${processingTime}ms)`);
      return result;
    } catch (error) {
      console.error('Error extracting gas price data:', error);
      return {
        url: '',
        state,
        name: state,
        regular: null,
        midgrade: null,
        premium: null,
        diesel: null,
        metros: [],
        data: {}
      };
    }
  }

  // Helper function to extract city-specific data from markdown
  const extractCityDataFromMarkdown = (markdown: string, cityName: string): MetroPriceData | null => {
    try {
      // Look for the city's section in the markdown
      const citySectionRegex = new RegExp(`###\\s+${cityName.replace(/\s+/g, '\\s+')}\\s*\\n([\\s\\S]*?)(?=###|$)`, 'i');
      const cityMatch = markdown.match(citySectionRegex);
      
      if (cityMatch) {
        const metroData = extractDetailedMetroData(cityMatch[1], cityName);
        return metroData; // This will be null if the city is invalid
      }
      
      return null;
    } catch (error) {
      console.error('Error extracting city data for', cityName, ':', error);
      return null;
    }
  };

  const handleScrapeAll = async () => {
    setIsLoading(true);
    setProgress(0);
    setScrapedData([]);
    
    try {
      const results = [];
      const totalStates = STATE_URLS.length;
      const failedStates: string[] = [];
      
      for (let i = 0; i < totalStates; i++) {
        const stateInfo = STATE_URLS[i];
        setCurrentState(stateInfo.name);
        
        // Add timeout to prevent unresponsive page
        const timeoutPromise = new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 30000)
        );
        
        let result = await Promise.race([
          FirecrawlService.scrapeUrl(stateInfo.url),
          timeoutPromise
        ]) as any;
        let retryCount = 0;
        const maxRetries = 2;
        
        // Retry logic for failed scrapes
        while (!result.success && retryCount < maxRetries) {
          console.warn(`Retry ${retryCount + 1} for ${stateInfo.name}:`, result.error);
          retryCount++;
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
          result = await Promise.race([
            FirecrawlService.scrapeUrl(stateInfo.url),
            timeoutPromise
          ]);
        }
        
        if (result.success && result.data) {
          const markdown = result.data.data?.markdown || result.data.markdown || '';
          const extractedData = extractGasPriceData(markdown, stateInfo.state);
          
          // Validate that we extracted at least some data
          const hasData = extractedData.regular || extractedData.midgrade || 
                         extractedData.premium || extractedData.diesel || 
                         extractedData.metros.length > 0;
          
          if (hasData) {
            results.push({
              url: stateInfo.url,
              state: stateInfo.state,
              name: stateInfo.name,
              data: result.data, // Store original data for debugging
              ...extractedData
            });
          } else {
            console.warn('No data extracted for', stateInfo.name);
            failedStates.push(stateInfo.name);
            results.push({
              url: stateInfo.url,
              state: stateInfo.state,
              name: stateInfo.name,
              regular: null,
              midgrade: null,
              premium: null,
              diesel: null,
              metros: [],
              data: null
            });
          }
        } else {
          console.warn('Failed to scrape', stateInfo.name, 'after retries:', result.error);
          failedStates.push(stateInfo.name);
          // Still add entry with null values to track failed scrapes
          results.push({
            url: stateInfo.url,
            state: stateInfo.state,
            name: stateInfo.name,
            regular: null,
            midgrade: null,
            premium: null,
            diesel: null,
            metros: [],
            data: null
          });
        }
        
        setProgress(((i + 1) / totalStates) * 100);
        
        // Rate limiting is now handled automatically by FirecrawlService
      }
      
      setScrapedData(results);
      setCurrentState('');
      
      const successfulStates = results.filter(r => r.regular || r.midgrade || r.premium || r.diesel || r.metros.length > 0).length;
      const failedCount = failedStates.length;
      
      if (failedCount > 0) {
        toast({
          title: "Scraping Complete",
          description: `Successfully scraped ${successfulStates} states. Failed: ${failedCount} states (${failedStates.join(', ')})`,
          variant: "default",
        });
      } else {
        toast({
          title: "Success",
          description: `Successfully scraped gas prices for all ${successfulStates} states`,
        });
      }
    } catch (error) {
      console.error('Error scraping gas prices:', error);
      toast({
        title: "Error",
        description: "Failed to scrape gas prices",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  const saveToSupabase = async () => {
    setIsSaving(true);
    try {
      for (const data of scrapedData) {
        // Save state-level data to aaa_gas_prices table
        const stateData = {
            location_name: data.name,
          state_code: data.state,
          state_name: data.name,
          source_url: data.url,
          source_type: 'aaa',
            regular_price: data.regular ? parseFloat(data.regular.replace('$', '')) : null,
            mid_grade_price: data.midgrade ? parseFloat(data.midgrade.replace('$', '')) : null,
            premium_price: data.premium ? parseFloat(data.premium.replace('$', '')) : null,
            diesel_price: data.diesel ? parseFloat(data.diesel.replace('$', '')) : null,
          regular_price_original: data.regular,
          mid_grade_price_original: data.midgrade,
          premium_price_original: data.premium,
          diesel_price_original: data.diesel,
          last_updated_on_site: null, // AAA doesn't provide explicit update timestamps
          currency: 'USD',
          data_type: 'state_average',
            metro_data: data.metros,
            scrape_successful: true,
          scraped_at: new Date().toISOString()
          };

        const { error: stateError } = await supabase
            .from('aaa_gas_prices')
          .insert(stateData);

        if (stateError) {
          console.error('Error saving state data:', stateError);
        }

        // Save metro area data to aaa_metro_prices table
          if (data.metros && data.metros.length > 0) {
            for (const metro of data.metros) {
              const metroData = {
                state_code: data.state,
                state_name: data.name,
                metro_name: metro.city,
                source_url: data.url,
                source_type: 'aaa',
                regular_price: metro.price ? parseFloat(metro.price.replace('$', '')) : null,
                mid_grade_price: metro.midPrice ? parseFloat(metro.midPrice.replace('$', '')) : null,
                premium_price: metro.premiumPrice ? parseFloat(metro.premiumPrice.replace('$', '')) : null,
                diesel_price: metro.dieselPrice ? parseFloat(metro.dieselPrice.replace('$', '')) : null,
                regular_price_original: metro.price,
                mid_grade_price_original: metro.midPrice,
                premium_price_original: metro.premiumPrice,
                diesel_price_original: metro.dieselPrice,
                // Add detailed time-based data
                current_avg_data: metro.currentAvg,
                yesterday_avg_data: metro.yesterdayAvg,
                week_ago_avg_data: metro.weekAgoAvg,
                month_ago_avg_data: metro.monthAgoAvg,
                year_ago_avg_data: metro.yearAgoAvg,
                currency: 'USD',
                scraped_at: new Date().toISOString()
              };

              const { error: metroError } = await supabase
                    .from('aaa_metro_prices')
                    .insert(metroData);

              if (metroError) {
                console.error('Error saving metro data:', metroError);
              }
            }
          }
        }
      
      toast({
        title: "Data Saved Successfully",
        description: `Saved ${scrapedData.length} states with metro area data to Supabase`,
      });
    } catch (error) {
      console.error('Error saving to Supabase:', error);
      toast({
        title: "Save Failed",
        description: "Failed to save data to Supabase",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (!apiKeySet) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="border-fuel-orange/20 shadow-fuel">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-12 h-12 bg-gradient-fuel rounded-full flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Setup Firecrawl API</CardTitle>
            <CardDescription>
              Enter your Firecrawl API key to start scraping gas prices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="apiKey" className="text-sm font-medium">
                  API Key
                </label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="fc-..."
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-fuel-orange"
                />
                <p className="text-xs text-muted-foreground">
                  Get your API key from{" "}
                  <a 
                    href="https://firecrawl.dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-fuel-orange hover:text-fuel-yellow transition-colors"
                  >
                    firecrawl.dev
                  </a>
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-fuel hover:shadow-glow transition-all duration-200"
              >
                Save API Key
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="border-fuel-orange/20 shadow-fuel">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-fuel rounded-full flex items-center justify-center mb-4">
            <Fuel className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold">US Gas Price Scraper</CardTitle>
          <CardDescription className="text-lg">
            Scrape real-time gas prices from AAA for all 50 states + DC
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {!isLoading && (
            <div className="space-y-4">
              <Button
                onClick={handleScrapeAll}
                size="lg"
                className="bg-gradient-fuel hover:shadow-glow transition-all duration-200 text-lg px-8 py-6"
              >
                <Fuel className="w-5 h-5 mr-2" />
                Scrape All Gas Prices
              </Button>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  onClick={handleTestAAAFormat}
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-500 hover:bg-green-500/10"
                >
                  Test AAA Format
                </Button>
                <Button
                  onClick={handleTestSingleState}
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                >
                  Test Single State
                </Button>
                <Button
                  onClick={handleTestRI}
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                >
                  Test RI
                </Button>
                <Button
                  onClick={handleTestAllStates}
                  variant="outline"
                  size="sm"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
                >
                  Test All States
                </Button>
                <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  Rate Limit: {rateLimitInfo.remaining}/10 requests per minute
                </Badge>
                {rateLimitInfo.timeUntilReset > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    Reset in {Math.ceil(rateLimitInfo.timeUntilReset / 1000)}s
                  </Badge>
                )}
                </div>
              </div>
            </div>
          )}
          
          {isLoading && (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-lg">
                <Clock className="w-5 h-5 animate-spin text-fuel-orange" />
                <span>Scraping {currentState}...</span>
              </div>
              <Progress 
                value={progress} 
                className="w-full h-3 bg-muted"
              />
              <div className="flex items-center justify-center space-x-4 text-sm">
                <p className="text-muted-foreground">
                  {Math.round(progress)}% complete • Please wait, this may take a few minutes
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Rate Limit: {rateLimitInfo.remaining}/10
                  </Badge>
                  {rateLimitInfo.timeUntilReset > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      Reset in {Math.ceil(rateLimitInfo.timeUntilReset / 1000)}s
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {scrapedData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scrapedData.map((data, index) => (
            <Card key={index} className="border-fuel-blue/20 hover:shadow-glow transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-fuel-orange" />
                    {data.state}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-fuel-yellow/10 text-fuel-orange border-fuel-orange/20">
                    {data.name}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Fuel Types */}
                <div className="grid grid-cols-2 gap-3">
                  {data.regular && (
                    <div className="bg-gradient-price/10 p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Regular</div>
                      <div className="text-lg font-bold text-fuel-green">{data.regular}</div>
                    </div>
                  )}
                  {data.midgrade && (
                    <div className="bg-gradient-price/10 p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Mid-Grade</div>
                      <div className="text-lg font-bold text-fuel-blue">{data.midgrade}</div>
                    </div>
                  )}
                  {data.premium && (
                    <div className="bg-gradient-price/10 p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Premium</div>
                      <div className="text-lg font-bold text-fuel-orange">{data.premium}</div>
                    </div>
                  )}
                  {data.diesel && (
                    <div className="bg-gradient-price/10 p-3 rounded-lg">
                      <div className="text-sm text-muted-foreground">Diesel</div>
                      <div className="text-lg font-bold text-fuel-red">{data.diesel}</div>
                    </div>
                  )}
                </div>

                {/* Metro Areas */}
                {data.metros && data.metros.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Metro Areas ({data.metros.length})
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {data.metros.slice(0, 5).map((metro, idx) => (
                        <div key={idx} className="text-sm border-l-2 border-fuel-orange/20 pl-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium truncate">{metro.city}</span>
                            <span className="font-semibold text-fuel-green">{metro.price}</span>
                          </div>
                          {metro.midPrice && metro.premiumPrice && metro.dieselPrice && (
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>Mid: {metro.midPrice}</span>
                              <span>Prem: {metro.premiumPrice}</span>
                              <span>Diesel: {metro.dieselPrice}</span>
                            </div>
                          )}
                          {/* Show time-based data if available */}
                          {(metro.currentAvg?.regular || metro.yesterdayAvg?.regular || 
                            metro.weekAgoAvg?.regular || metro.monthAgoAvg?.regular || 
                            metro.yearAgoAvg?.regular) && (
                            <div className="text-xs text-muted-foreground mt-1 space-y-1">
                              {metro.currentAvg?.regular && (
                                <div className="flex justify-between">
                                  <span>Current:</span>
                                  <span className="text-fuel-green">{metro.currentAvg.regular}</span>
                                </div>
                              )}
                              {metro.yesterdayAvg?.regular && (
                                <div className="flex justify-between">
                                  <span>Yesterday:</span>
                                  <span>{metro.yesterdayAvg.regular}</span>
                                </div>
                              )}
                              {metro.weekAgoAvg?.regular && (
                                <div className="flex justify-between">
                                  <span>Week Ago:</span>
                                  <span>{metro.weekAgoAvg.regular}</span>
                                </div>
                              )}
                              {metro.monthAgoAvg?.regular && (
                                <div className="flex justify-between">
                                  <span>Month Ago:</span>
                                  <span>{metro.monthAgoAvg.regular}</span>
                                </div>
                              )}
                              {metro.yearAgoAvg?.regular && (
                                <div className="flex justify-between">
                                  <span>Year Ago:</span>
                                  <span>{metro.yearAgoAvg.regular}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Export/Summary */}
      {scrapedData.length > 0 && (
        <Card className="border-fuel-green/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-fuel-green">
              Scraping Complete
            </CardTitle>
            <CardDescription>
              Successfully scraped data from {scrapedData.length} states
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button 
              onClick={() => {
                const jsonData = JSON.stringify(scrapedData, null, 2);
                const blob = new Blob([jsonData], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `gas-prices-${new Date().toISOString().split('T')[0]}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              variant="outline"
              className="border-fuel-green text-fuel-green hover:bg-fuel-green/10"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Export Data as JSON
            </Button>
            
            <Button
              onClick={saveToSupabase}
              disabled={isSaving}
              className="bg-gradient-fuel hover:shadow-glow transition-all duration-200"
            >
              <Database className="w-4 h-4 mr-2" />
              {isSaving ? 'Saving...' : 'Save to Supabase'}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};